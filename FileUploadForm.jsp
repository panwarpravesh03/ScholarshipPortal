<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sF"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form:form method="post" action="upload" modelAttribute="uploadForm"
			enctype="multipart/form-data">


			<!-- <label>Folder Name</label> -->
			<!-- <input id="prefix" type="text" name="prefix" /><br/> -->

			<table id="fileTable" align="center">
			<tr>
				ID<input type="number" id="regid"><br>
			</tr>
				<tr>
					<td><b>Aadhar Details</b></td>
					<td><input name="files[0]" type="file" /></td>

				</tr>
				<td><b>Pan Card Details</td>
				<td><input name="files[1]" type="file" /></td>
				<tr>
					<td><b>Income Proof</td>
					<td><input name="files[2]" type="file" /></td>
				</tr>
				<td><b>Property Details</td>
				<td><input name="files[3]" type="file" /></td>
				<tr>
				</tr>

			</table>
			<br />
			<input type="submit" value="Upload" />
		</form:form>
</body>
</html>