<?php
$db_name     = "regen134_reg";
$db_password = "regencyfest@2013";
$db_link     = mysql_connect("localhost", "regen134_regency", $db_password);
mysql_select_db($db_name, $db_link);
mysql_query("SET NAMES UTF8");
$table = "reg";


function assoc_query_2D($sql, $id_name = false){
  $result = mysql_query($sql);
  $arr = array();
  $row = array();
  if($result){
    if($id_name == false){
      while($row = mysql_fetch_assoc($result))
        $arr[] = $row;
    }else{
      while($row = mysql_fetch_assoc($result)){
        $id = $row['id'];
        $arr[$id] = $row;
      }
    }
  }else return 0;

  return $arr;
}

function query_whole_table($table, $value = '*'){
    $sql = "SELECT $value FROM $table";
  return assoc_query_2D($sql);
}

$export_str = "";
$result = query_whole_table($table);

foreach($result as $record){
  $export_str .= implode(";",$record) . "\n";
}
// add time to fileName
$date = time(); 
file_put_contents($date.'_'.$table."_export.csv", $export_str);
?>