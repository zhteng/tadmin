<?php
/**
 * @Author: www.zhteng.cn
 * @Date: 2018/3/28 12:10
 * @version v1.0  Bmactive.phpp
 */

namespace app\admin\controller\blogs;

use app\common\controller\Backend;
use app\admin\model\Bmactive;
use app\admin\model\Bcategory;
use fast\Tree;

class Bactive extends Backend
{
    protected $relationSearch = true;

    /**
     * Bactive模型对象
     */
    protected $model = null;
    protected $list = [];
	protected $categorylist = [];

    public function _initialize()
    {
        parent::_initialize();
        $this->request->filter(['strip_tags']);
        $this->model = model('Bmactive');
	    $this->Bmodel = model('app\admin\model\Bcategory');

	    $tree = Tree::instance();
	    $tree->init(collection($this->Bmodel->order('id desc')->select())->toArray(), 'pid');
	    $this->categorylist = $tree->getTreeList($tree->getTreeArray(0), 'name');

        $List = collection($this->model->order('id', 'desc')->select())->toArray();
        $this->view->assign('ruledata', $List);
        $this->view->assign("typeList", Bmactive::getTypeList());
        $this->view->assign("flagList", $this->model->getFlagList());
	    $this->view->assign("parentList", $this->categorylist);
    }


    public function index()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax())
        {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('pkey_name'))
            {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                //->with('group')
                ->where($where)
                ->order($sort, $order)
                ->count();
            $list = $this->model
                //->with('group')
                ->where($where)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
            foreach ($list as $k => $v)
            {
                $v->password = '';
                $v->salt = '';
            }
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }




}