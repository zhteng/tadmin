<?php
/**
 * @Author: www.zhteng.cn
 * @Date: 2018/4/10 16:21
 * @version v1.0  Mblogss.php
 */

namespace app\index\controller;

use app\common\controller\Frontend;
use app\index\model\Mblogs;

class Blogs extends Frontend
{
	protected $model = null;

	protected $noNeedLogin = ['index','lists','hello'];

	public function _initialize()
	{
		parent::_initialize(); // TODO: Change the autogenerated stub
		$this->model = model('Mblogs');
	}

	public function index()
	{
		$offset = 0;
		$limit = 10;

		$total = $this->model
			->where(array('status' => 'normal'))
			->order('', 'id')
			->count();

		$list = $this->model->getList(null, null, $offset, $limit);
		$newlist = $this->getNews();

		$result = array("total" => $total, "rows" => $list, 'nrows' => $newlist);
		$this->view->assign("row", $result);
		return $this->view->fetch();
	}

	// 文章
	public function lists($ids='')
	{
		$pn = $this->model->getLast($ids);
		$list = $this->model->getOne($ids);

		$this->view->assign('pn', $pn);
		$this->view->assign('list', $list);
		return $this->view->fetch();
	}

	// 最新文章
	public function getNews()
	{
		$list = collection($this->model
			->where(array())
			->field(['id', 'title', 'image','createtime'])
			->order('createtime', 'desc')
			->limit(5)
			->select())->toArray();
		return $list;
	}


}