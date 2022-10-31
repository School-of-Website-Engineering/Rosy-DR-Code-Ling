<?php
!defined('DEDEINC') && exit("403 Forbidden!");
/**
 * 
 *
 * @version        $Id: imagelist.lib.php 1 16:22 2019年12月14日 kira $
 * @package        DedeCMS.kira修改
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
 
function lib_imagelist(&$ctag, &$refObj)
{
    global $dsql,$sqlCt;
    $attlist="desclen|80,field|,limit|";
    FillAttsDefault($ctag->CAttribute->Items,$attlist);
    extract($ctag->CAttribute->Items, EXTR_SKIP);
	if(!empty($field)) $refObj->addTableRow['imgurls'] = $refObj->addTableRow[$field];
    if(!isset($refObj->addTableRow['imgurls'])) return ;
    
    $revalue = '';
    $innerText = trim($ctag->GetInnerText());
    if(empty($innerText)) $innerText = GetSysTemplets('productimagelist.htm');
    
    $dtp = new DedeTagParse();
    $dtp->LoadSource($refObj->addTableRow['imgurls']);
    
    $images = array();
    if(is_array($dtp->CTags))
    {
        foreach($dtp->CTags as $ctag)
        {
            if($ctag->GetName()=="img")
            {
                $row = array();
                $row['imgsrc'] = trim($ctag->GetInnerText());
                $row['text'] = $ctag->GetAtt('text');
                $images[] = $row;
            }
        }
    }
    $dtp->Clear();

    $revalue = '';
    $ctp = new DedeTagParse();
    $ctp->SetNameSpace('field','[',']');
    $ctp->LoadSource($innerText);
	$GLOBALS['autoindex'] = 0;
	$limit = trim(preg_replace('#limit#is','',$limit));
	if($limit!='')
	{
		if(preg_match('#,#', $limit))
		{
			$limitarr = explode(",", $limit);
			$lmt = $limitarr[0];
			$num = $limitarr[1];
		}
		else
		{
			$lmt = 0;
			$num = $limit;
		}
		$images = array_slice($images,$lmt);
	}
    foreach($images as $row)
    {
		if($limit!='' && $GLOBALS['autoindex'] == $num) break;
        foreach($ctp->CTags as $tagid=>$ctag)
        {
            if(isset($row[$ctag->GetName()])){ $ctp->Assign($tagid,$row[$ctag->GetName()]); }
        }
        $revalue .= $ctp->GetResult();
		$GLOBALS['autoindex']++;
    }
    return $revalue;
}