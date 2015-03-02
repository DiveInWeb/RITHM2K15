
<?php
echo "<h1><center>Registration List</center></h1>";
$con=mysql_connect("localhost", "regen134_regency", "regencyfest@2013"); 
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db('regen134_reg',$con);

$result = mysql_query("SELECT * FROM reg");

echo "<center><table border='1'>
<tr>
<th>Sl.no</th>
<th>Name</th>
<th>College Name</th>
<th>Phone</th>
<th>Email</th>
<th>Address</th>
<th>Gender</th>
<th>Events</th>
</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
  echo "<td>" . $row['id'] . "</td>";
  echo "<td>" . $row['name'] . "</td>";
  echo "<td>" . $row['college'] . "</td>";
  echo "<td>" . $row['phone'] . "</td>";
  echo "<td>" . $row['email'] . "</td>";
  echo "<td>" . $row['address'] . "</td>";
  echo "<td>" . $row['gender'] . "</td>";
  echo "<td>" . $row['event'] . "</td>";
  echo "</tr>";
  }
echo "</table></center>";

mysql_close($con);
?> 

<html><body><center><a href="regexport.php">Import Registrion list as Exel file</a></center></body></html>