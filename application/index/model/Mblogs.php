<?php
/**
 * @Author: www.zhteng.cn
 * @Date: 2018/4/10 16:36
 * @version v1.0  Mblogs.phpp
 */

namespace app\index\model;

use think\Model;

class Mblogs extends Model
{
	protected $name = 'blogactive';

	public static function getList($type = null, $status = null, $offset = 0, $limit = 10)
	{
		$list = collection(self::where(function ($query) use ($type, $status) {
					if (!is_null($type)){
						$query->where('type', '=', $type);
					}

					if (!is_null($status)){
						$query->where('status', '=', $status);
					}
				})->order('weigh', 'desc')->order('id', 'desc')->limit($offset, $limit)->select())->toArray();
		return $list;
	}

	// 文章详情
	public function getOne($ids)
	{
		$list = collection(self::where(function ($query) use ($ids) {
					if (!is_null($ids)) {
						$query->where('id', '=', $ids);
					}
				})->field([''], true)->order('id', 'desc')->select())->toArray();

		return $list;
	}

	//上下文章
	public function getLast($id)
	{
		$prev = collection(self::where(function ($query) use ($id) {
			if (!is_null($id)) {
				$query->where('id', '<', $id);
			}
		})->field(['id', 'title'])->order('id', 'desc')->limit(1)->select())->toArray();
		$prev = !empty($prev) ? $prev[0] : [];

		$next = collection(self::where(function ($query) use ($id) {
				if (!is_null($id)) {
					$query->where('id', '>', $id);
				}
		})->field(['id', 'title'])->order('id', 'asc')->limit(1)->select())->toArray();
		$next = !empty($next) ? $next[0] : [];

		return array('next' => $next, 'prev' => $prev);
	}

}