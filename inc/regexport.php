<?php
$db_name     = "u616683551_rithm";
$db_password = "rakesh";
$db_link     = mysqli_connect("localhost", "u616683551_rithm", $db_password,"u616683551_rithm");
mysql_query("SET NAMES UTF8");
$table = "reg";


function assoc_query_2D($sql, $id_name = false){
  $result = mysqli_query($db_link,$sql);
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