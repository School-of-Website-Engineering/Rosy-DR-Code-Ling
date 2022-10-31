<?php
/**
 * 系统核心函数存放文件
 * @version        $Id: common.func.php 4 16:39 2010年7月6日Z tianya $
 * @package        DedeCMS.Libraries
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
if(!defined('DEDEINC')) exit('dedecms');

if (version_compare(PHP_VERSION, '7.0.0', '>='))
{
    if (!function_exists('mysql_connect') AND function_exists('mysqli_connect')) {
        function mysql_connect($server, $username, $password)
        {
            return mysqli_connect($server, $username, $password);
        }
    }

    if (!function_exists('mysql_query') AND function_exists('mysqli_query')) {
        function mysql_query($query, $link)
        {
            return mysqli_query($link, $query);
        }
    }

    if (!function_exists('mysql_select_db') AND function_exists('mysqli_select_db')) {
        function mysql_select_db($database_name, $link)
        {
            return mysqli_select_db($link, $database_name);
        }
    }

    if (!function_exists('mysql_fetch_array') AND function_exists('mysqli_fetch_array')) {
        function mysql_fetch_array($result)
        {
            return mysqli_fetch_array($result);
        }
    }

    if (!function_exists('mysql_close') AND function_exists('mysqli_close')) {
        function mysql_close($link)
        {
            return mysqli_close($result);
        }
    }
    if (!function_exists('split')) {
        function split($pattern, $string){
            return explode($pattern, $string);
        }
    }
}

function make_hash()
{
    $rand = dede_random_bytes(16);
    $_SESSION['token'] = ($rand === FALSE)
        ? md5(uniqid(mt_rand(), TRUE))
        : bin2hex($rand);
    return $_SESSION['token'];
}

function dede_random_bytes($length)
{
    if (empty($length) OR ! ctype_digit((string) $length))
    {
        return FALSE;
    }
    if (function_exists('random_bytes'))
    {
        try
        {
            return random_bytes((int) $length);
        }
        catch (Exception $e)
        {
            return FALSE;
        }
    }
    if (defined('MCRYPT_DEV_URANDOM') && ($output = mcrypt_create_iv($length, MCRYPT_DEV_URANDOM)) !== FALSE)
    {
        return $output;
    }
    if (is_readable('/dev/urandom') && ($fp = fopen('/dev/urandom', 'rb')) !== FALSE)
    {
        is_php('5.4') && stream_set_chunk_size($fp, $length);
        $output = fread($fp, $length);
        fclose($fp);
        if ($output !== FALSE)
        {
            return $output;
        }
    }

    if (function_exists('openssl_random_pseudo_bytes'))
    {
        return openssl_random_pseudo_bytes($length);
    }

    return FALSE;
}


/**
 *  载入小助手,系统默认载入小助手
 *  在/data/helper.inc.php中进行默认小助手初始化的设置
 *  使用示例:
 *      在开发中,首先需要创建一个小助手函数,目录在\include\helpers中
 *  例如,我们创建一个示例为test.helper.php,文件基本内容如下:
 *  <code>
 *  if ( ! function_exists('HelloDede'))
 *  {
 *      function HelloDede()
 *      {
 *          echo "Hello! Dede...";
 *      }
 *  }
 *  </code>
 *  则我们在开发中使用这个小助手的时候直接使用函数helper('test');初始化它
 *  然后在文件中就可以直接使用:HelloDede();来进行调用.
 *
 * @access    public
 * @param     mix   $helpers  小助手名称,可以是数组,可以是单个字符串
 * @return    void
 */
$_helpers = array();
function helper($helpers)
{
    //如果是数组,则进行递归操作
    if (is_array($helpers))
    {
        foreach($helpers as $dede)
        {
            helper($dede);
        }
        return;
    }

    if (isset($_helpers[$helpers]))
    {
        return;
    }
    if (file_exists(DEDEINC.'/helpers/'.$helpers.'.helper.php'))
    {
        include_once(DEDEINC.'/helpers/'.$helpers.'.helper.php');
        $_helpers[$helpers] = TRUE;
    }
    // 无法载入小助手
    if ( ! isset($_helpers[$helpers]))
    {
        exit('Unable to load the requested file: helpers/'.$helpers.'.helper.php');
    }
}

function dede_htmlspecialchars($str) {
    global $cfg_soft_lang;
    if (version_compare(PHP_VERSION, '5.4.0', '<')) return htmlspecialchars($str);
    if ($cfg_soft_lang=='gb2312') return htmlspecialchars($str,ENT_COMPAT,'ISO-8859-1');
    else return htmlspecialchars($str);
}

/**
 *  控制器调用函数
 *
 * @access    public
 * @param     string  $ct    控制器
 * @param     string  $ac    操作事件
 * @param     string  $path  指定控制器所在目录
 * @return    string
 */
function RunApp($ct, $ac = '',$directory = '')
{

    $ct = preg_replace("/[^0-9a-z_]/i", '', $ct);
    $ac = preg_replace("/[^0-9a-z_]/i", '', $ac);

    $ac = empty ( $ac ) ? $ac = 'index' : $ac;
	if(!empty($directory)) $path = DEDECONTROL.'/'.$directory. '/' . $ct . '.php';
	else $path = DEDECONTROL . '/' . $ct . '.php';

	if (file_exists ( $path ))
	{
		require $path;
	} else {
		 if (DEBUG_LEVEL === TRUE)
        {
            trigger_error("Load Controller false!");
        }
        //生产环境中，找不到控制器的情况不需要记录日志
        else
        {
            header ( "location:/404.html" );
            die ();
        }
	}
	$action = 'ac_'.$ac;
    $loaderr = FALSE;
    $instance = new $ct ( );
    if (method_exists ( $instance, $action ) === TRUE)
    {
        $instance->$action();
        unset($instance);
    } else $loaderr = TRUE;

    if ($loaderr)
    {
        if (DEBUG_LEVEL === TRUE)
        {
            trigger_error("Load Method false!");
        }
        //生产环境中，找不到控制器的情况不需要记录日志
        else
        {
            header ( "location:/404.html" );
            die ();
        }
    }
}

/**
 *  载入小助手,这里用户可能载入用helps载入多个小助手
 *
 * @access    public
 * @param     string
 * @return    string
 */
function helpers($helpers)
{
    helper($helpers);
}

//兼容php4的file_put_contents
if(!function_exists('file_put_contents'))
{
    function file_put_contents($n, $d)
    {
        $f=@fopen($n, "w");
        if (!$f)
        {
            return FALSE;
        }
        else
        {
            fwrite($f, $d);
            fclose($f);
            return TRUE;
        }
    }
}

/**
 *  显示更新信息
 *
 * @return    void
 */
function UpdateStat()
{
    include_once(DEDEINC."/inc/inc_stat.php");
    return SpUpdateStat();
}

/**
 *  短消息函数,可以在某个动作处理后友好的提示信息
 *
 * @param     string  $msg      消息提示信息
 * @param     string  $gourl    跳转地址
 * @param     int     $onlymsg  仅显示信息
 * @param     int     $limittime  限制时间
 * @return    void
 */
function ShowMsg($msg, $gourl, $onlymsg=0, $limittime=0)
{
    if(empty($GLOBALS['cfg_plus_dir'])) $GLOBALS['cfg_plus_dir'] = '..';

    $htmlhead  = "<html>\r\n<head>\r\n<title>提示信息</title>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=gb2312\" />\r\n";
    $htmlhead .= "<base target='_self'/>\r\n<script>function run(){var s=document.getElementById('timer');if(s.innerHTML==0){window.location.history.back();return false}s.innerHTML=s.innerHTML*1-1}window.setInterval('run();',1000);</script><style>body{background: url('/images/bg-body.gif') repeat scroll 0% 0% #F0F0F0; margin: 0px; font: 12px Arial,Helvetica,sans-serif,Simsun,宋体; color: #555; padding: 0px;}a{color:#690;}a:hover{color:red;}.dialog-box{height: 120px;;width: 480px;margin: 90px auto 200px;background-color: #FFF;border-right: 1px solid #CBCBCB;border-width: 1px;border-style: solid;border-color: #D9D9D9 #CBCBCB #CBCBCB #D9D9D9;-moz-border-top-colors: none;-moz-border-right-colors: none;-moz-border-bottom-colors: none;-moz-border-left-colors: none;border-image: none;box-shadow: 2px 2px 0px rgba(102, 102, 102, 0.1);border-radius: 2px;padding: 20px 0px 35px 40px;}.icon-no, .icon-ok{background: url('/images/errbg.png') no-repeat scroll 0px 0px transparent; float: left; width: 120px; height: 120px; display: block; overflow: hidden;}.dialog-text{width: 300px; display: block; float: left; padding-left: 0px; margin-left: 25px; margin-top: 20px; border-left: 0px solid #E8E8E8; line-height: 24px;}.green{color: #690;}</style></head>\r\n<body>".(isset($GLOBALS['ucsynlogin']) ? $GLOBALS['ucsynlogin'] : '')."\r\n<div>\r\n<script>\r\n";
    $htmlfoot  = "</script>\r\n</div>\r\n</body>\r\n</html>\r\n";

    $litime = ($limittime==0 ? 1000 : $limittime);
    $func = '';

    if($gourl=='-1')
    {
        if($limittime==0) $litime = 5000;
        $gourl = "javascript:history.go(-1);";
    }

    if($gourl=='' || $onlymsg==1)
    {
        $msg = "<script>alert(\"".str_replace("\"","“",$msg)."\");</script>";
    }
    else
    {
        //当网址为:close::objname 时, 关闭父框架的id=objname元素
        if(preg_match('/close::/',$gourl))
        {
            $tgobj = trim(preg_replace('/close::/', '', $gourl));
            $gourl = 'javascript:;';
            $func .= "window.parent.document.getElementById('{$tgobj}').style.display='none';\r\n";
        }

        $func .= "      var pgo=0;
      function JumpUrl(){
        if(pgo==0){ location='$gourl'; pgo=1; }
      }\r\n";
        $rmsg = $func;
        $rmsg .= "document.write(\"<br /><div style='margin: 0px auto; width: 800px; ' id='container' class='wrap'>";
        $rmsg .= " <div class='dialog-box'>\");\r\n";
        $rmsg .= "document.write(\"<span class='icon-no'></span><span class='dialog-text'>\");\r\n";
        $rmsg .= "document.write(\"<span style='float:left;color:red;font-size:12px;margin-top:20px;'>".str_replace("\"","“",$msg)."</span>\");\r\n";
        $rmsg .= "document.write(\"";

        if($onlymsg==0)
        {
            if( $gourl != 'javascript:;' && $gourl != '')
            {
                $rmsg .= "<br><br><span style='float:left;'> <span id='timer'>5</span> 秒后自动为你跳转到前一页面 <a href='{$gourl}'>立即跳转</a></span>";
                $rmsg .= "<br></span><div class='c'></div></div>\");\r\n";
                $rmsg .= "setTimeout('JumpUrl()',$litime);";
            }
            else
            {
                $rmsg .= "<br></span><div class='c'></div></div>\");\r\n";
            }
        }
        else
        {
            $rmsg .= "<br/></span><div class='c'></div></div>\");\r\n";
        }
        $msg  = $htmlhead.$rmsg.$htmlfoot;
    }
    echo $msg;
}

/**
 *  获取验证码的session值
 *
 * @return    string
 */
function GetCkVdValue()
{
	@session_id($_COOKIE['PHPSESSID']);
    @session_start();
    return isset($_SESSION['securimage_code_value']) ? $_SESSION['securimage_code_value'] : '';
}

/**
 *  PHP某些版本有Bug，不能在同一作用域中同时读session并改注销它，因此调用后需执行本函数
 *
 * @return    void
 */
function ResetVdValue()
{
    @session_start();
    $_SESSION['securimage_code_value'] = '';
}


// 自定义函数接口
// 这里主要兼容早期的用户扩展,v5.7之后我们建议使用小助手helper进行扩展
if( file_exists(DEDEINC.'/extend.func.php') )
{
    require_once(DEDEINC.'/extend.func.php');
}

//获取顶级栏目名 by 小虎哥
function GetTopTypename($id)
{
    global $dsql;
    $row = $dsql->GetOne("SELECT typename,topid FROM #@__arctype WHERE id= $id");
    if ($row['topid'] == '0')
    {
        return $row['typename'];
    }
    else
    {
        $row1 = $dsql->GetOne("SELECT typename FROM #@__arctype WHERE id= $row[topid]");
        return $row1['typename'];
    }
}

//获取顶级栏目英文名 by 小虎哥
function GetTopTypenameen($id)
{
    global $dsql;
    $row = $dsql->GetOne("SELECT typenameen,topid FROM #@__arctype WHERE id= $id");
    if ($row['topid'] == '0')
    {
        return $row['typenameen'];
    }
    else
    {
        $row1 = $dsql->GetOne("SELECT typenameen FROM #@__arctype WHERE id= $row[topid]");
        return $row1['typenameen'];
    }
}

//获取顶级栏目图片 by 小虎哥
function GetTopTypeimg($id)
{
    global $dsql;
    $row = $dsql->GetOne("SELECT typeimg,topid FROM #@__arctype WHERE id= $id");
    if ($row['topid'] == '0')
    {
        return $row['typeimg'];
    }
    else
    {
        $row1 = $dsql->GetOne("SELECT typeimg FROM #@__arctype WHERE id= $row[topid]");
        return $row1['typeimg'];
    }
}

//获取顶级栏目描述 by 小虎哥
function GetTopDescription($id)
{
    global $dsql;
    $row = $dsql->GetOne("SELECT description,topid FROM #@__arctype WHERE id= $id");
    if ($row['topid'] == '0')
    {
        return $row['description'];
    }
    else
    {
        $row1 = $dsql->GetOne("SELECT description FROM #@__arctype WHERE id= $row[topid]");
        return $row1['description'];
    }
}