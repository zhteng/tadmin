<?php
/**
 * @Author: www.zhteng.cn
 * @Date: 2018/3/28 11:12
 * @version v1.0  Bactiveve.php
 */

namespace app\admin\model;

use think\Model;

class Bmactive extends Model
{
    // 表名
    protected $name = 'blogactive';
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';



    public function getBcgory(){

    }

    /**
     * 读取分类类型
     * @return array
     */
    public static function getTypeList()
    {
        $typeList = config('site.categorytype');
        foreach ($typeList as $k => &$v)
        {
            $v = __($v);
        }
        return $typeList;
    }

    public function getFlagList()
    {
        return ['hot' => __('Hot'), 'index' => __('Index'), 'recommend' => __('Recommend')];
    }

    public function setFlagAttr($value, $data)
	{
		return is_array($value) ? implode(',', $value) : $value;
	}

}