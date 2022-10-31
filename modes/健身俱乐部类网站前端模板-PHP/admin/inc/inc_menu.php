<?php
/**
 * 后台管理菜单项
 *
 * @version        $Id: inc_menu.php 1 10:32 2010年7月21日Z tianya $
 * @package        DedeCMS.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/../config.php");

//载入可发布频道
$addset = '';

//检测可用的内容模型
if($cfg_admin_channel = 'array' && count($admin_catalogs) > 0)
{
    $admin_catalog = join(',', $admin_catalogs);
    $dsql->SetQuery(" SELECT channeltype FROM `#@__arctype` WHERE id IN({$admin_catalog}) GROUP BY channeltype ");
}
else
{
    $dsql->SetQuery(" SELECT channeltype FROM `#@__arctype` GROUP BY channeltype ");
}
$dsql->Execute();
$candoChannel = '';
while($row = $dsql->GetObject())
{
    $candoChannel .= ($candoChannel=='' ? $row->channeltype : ','.$row->channeltype);
}
if(empty($candoChannel)) $candoChannel = 1;
$dsql->SetQuery("SELECT id,typename,addcon,mancon FROM `#@__channeltype` WHERE id IN({$candoChannel}) AND id<>-1 AND isshow=1 ORDER BY id ASC");
$dsql->Execute();
while($row = $dsql->GetObject())
{
    $addset .= "  <m:item name='{$row->typename}' ischannel='1' link='{$row->mancon}?channelid={$row->id}' linkadd='{$row->addcon}?channelid={$row->id}' channelid='{$row->id}' rank='' target='main' />\r\n";
}
//////////////////////////

$adminMenu1 = $adminMenu2 = '';
if($cuserLogin->getUserType() >= 10)
{
    $adminMenu1 = "";
$adminMenu2 = "";
}
$remoteMenu = ($cfg_remote_site=='Y')? "<m:item name='远程服务器同步' link='makeremote_all.php' rank='sys_ArcBatch' target='main' />" : "";
$menusMain = "
-----------------------------------------------

<m:top item='1_' name='内容管理' display='block'>
  <m:item name='网站栏目管理' link='catalog_main.php' ischannel='1' addalt='创建栏目' linkadd='catalog_add.php?listtype=all' rank='t_List,t_AccList' target='main' />

  <m:item name='所有档案列表' link='content_list.php' rank='a_List,a_AccList' target='main' />
  <m:item name='内容模型管理'  link='mychannel_main.php' rank='c_List' target='main' />
  <m:item name='TAG标签管理' link='tags_main.php' rank='sys_Keyword' target='main' />
  
  
</m:top>

<m:top item='1_' name='生成管理' display='block'>
  
  <m:item name='一键更新网站' link='makehtml_all.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新系统缓存' link='sys_cache_up.php' rank='sys_ArcBatch' target='main' />
  <m:item name='更新主页HTML' link='makehtml_homepage.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新栏目HTML' link='makehtml_list.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新文档HTML' link='makehtml_archives.php' rank='sys_MakeHtml' target='main' />
  
</m:top>

<m:top item='1_' name='系统设置' display='none'>
  <m:item name='系统基本参数' link='sys_info.php' rank='sys_Edit' target='main' />
  <m:item name='系统用户管理' link='sys_admin_user.php' rank='sys_User' target='main' />
  <m:item name='数据库备份/还原' link='sys_data.php' rank='sys_Data' target='main' />
  <m:item name='验证安全设置' link='sys_safe.php' rank='sys_verify' target='main' />
  <m:item name='图片水印设置' link='sys_info_mark.php' rank='sys_Edit' target='main' />
  <m:item name='自定义文档属性' link='content_att.php' rank='sys_Att' target='main' />
  <m:item name='SQL命令行工具' link='sys_sql_query.php' rank='sys_Data' target='main' />
</m:top>

$adminMenu1

<m:top item='1_' name='网站运维' display='none'>
  <m:item name='幻灯片管理' link='ppt_main.php' rank='c_List' target='main'/>
  <m:item name='广告位管理' link='ad_main.php' rank='c_List' target='main'/>
  <m:item name='自定义表单' link='diy_main.php' rank='c_List' target='main'/>
  <m:item name='默认模板管理' link='templets_main.php' rank='c_List' target='main'/>
  <m:item name='内容模型管理' link='mychannel_main.php' rank='c_List' target='main'/>
  <m:item name='搜索关键词维护' link='search_keywords_main.php' rank='c_List' target='main'/>
  <m:item name='文档关键词维护' link='article_keywords_main.php' rank='sys_Keyword' target='main' />
  <m:item name='重复文档检测' link='article_test_same.php' rank='sys_ArcBatch' target='main' />
  <m:item name='友情链接管理' link='friendlink_main.php' rank='c_List' target='main'/>
</m:top>




$adminMenu2

-----------------------------------------------
";