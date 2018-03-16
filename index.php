<?php 
	ini_set("mbstring.internal_encoding","UTF-8");
	ini_set("mbstring.func_overload",7);

  	ini_set('max_execution_time', 300);

	$con=mysqli_connect("localhost","root","",'self_service');      
	
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}
	
	if (isset($_SERVER['HTTP_ORIGIN'])) {
		header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
		header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}
 
	// Access-Control headers are received during OPTIONS requests
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
			header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
			header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
		exit(0);
	}
	$postdata = file_get_contents("php://input");
	// $postdata = $_POST;
	if (isset($postdata)) {
		$request = json_decode($postdata);
		$status = '';

		if(sizeof($request) > 0)
			$status=$request[0]->status;

		if ($status == "login") {
			$email=$request[0]->email;
			$username = $request[0]->username;
			$password=$request[0]->password;
			$sel = "select * from user_db";
			
			$query=mysqli_query($con,$sel);
			if(!$query){
				echo json_encode(['status'=>'fail','detail'=>'empty email or usename or password']);
				exit;
			}
			else{
				while($row=mysqli_fetch_array($query,MYSQLI_ASSOC))
				{
				   
					if((($row['email'] == $email) || ($row['username'] == $username)) && ($row['password'] == $password))
					{   
						echo json_encode(['status'=>'success','userid'=>$row['email']]);
						exit;
					}
				} 
				echo json_encode(['status'=>'fail','detail'=>'Invaid username or password']);
			}
		}
		else if($status == "register")
		{
			$username = $request[0]->username;
			$email = $request[0]->email;
			$phone = $request[0]->phone;
			$password = $request[0]->password;

			$isstate = 2;
			
			$sel = "select * from user_db";
			$query=mysqli_query($con,$sel);
			while($row=mysqli_fetch_array($query))
			{
				if(($row['email'] == $email) || ($row['username'] == $username) )
				{
					$isstate = 1;
				}
			}
			if($isstate == 2)
			{
				$insert="INSERT INTO `user_db` (`username`, `email`, `phone`, `password`) VALUES ('$username', '$email', '$phone', '$password')";
				if(mysqli_query($con,$insert)){
					$sel_id = "select * from user_db where email='$email' or username='$username'";
					$query_id=mysqli_query($con, $sel_id); 
					$row=mysqli_fetch_array($query_id);
					// $userid = $row['reg_id'];
					// print_r($r   ow);
					echo json_encode(['status'=>'success', 'detail'=>$row]);
				} else{
					echo json_encode(['status'=>'fail', 'detail'=>'username or email is already taken']);
				}
			}
			else{
				echo json_encode(['status'=>'fail', 'detail'=>'username or email is already taken']);
			}
			
		}
		else if($status == "get_detail")
		{
			$email = $request[0]->email;

			$sel = "SELECT * FROM user_db WHERE email='$email'";		
			$query = mysqli_query($con,$sel);

			// echo $sel;
			if(!$query){
				echo json_encode(['status'=>'fail','detail'=>'empty email or password']);
				exit;
			}
			else{
				$row=mysqli_fetch_array($query,MYSQLI_ASSOC);

				echo json_encode(['status'=>'success','detail'=>$row]);
			}
			
		}
		else if($status == "getwork_detail")
		{
			$username = $request[0]->username;
			$email = $request[0]->email;

			$worker_data = [];
			$feedback_data = [];

			$sel = "select * from worker where email='$email' or username='$username'";			
			$query = mysqli_query($con,$sel);
			if(!$query){
				echo json_encode(['status'=>'fail','detail'=>'empty email or username']);
				exit;
			}
			else{
				$row=mysqli_fetch_array($query,MYSQLI_ASSOC);
				$worker_data = $row;

				$worker_id = $row['user_id'];
				$sel_feedback = "select * from feedback where worker_id='$worker_id'";
				$query_feedback = mysqli_query($con,$sel_feedback);
				while($row = mysqli_fetch_array($query_feedback,MYSQLI_ASSOC)){
					$sam_array = [];
					$sam_array['feed_back'] = $row['feed_back'];

					$buyer_id = $row['buyer_id'];
					$sel_buyerlist =  "select * from buyer where user_id='$buyer_id'";
					$query_buyerlist = mysqli_query($con,$sel_buyerlist);
					$row_buyerlist = mysqli_fetch_array($query_buyerlist,MYSQLI_ASSOC);

					$sam_array['photo'] = $row_buyerlist['photo'];

					array_push($feedback_data, $sam_array);
				}				
				echo json_encode(['status'=>'success','detail'=>$worker_data, 'feedback'=>$feedback_data]);
			}
			
		}
		else if($status == "get_buyerData")
		{
			$email = $request[0]->email;

			$worker_data = [];
			$total_data = [];

			$sel = "select * from buyer where email='$email'";			
			$query = mysqli_query($con,$sel);
			if(!$query){
				echo json_encode(['status'=>'fail','detail'=>'empty email or username']);
				exit;
			}
			else{
				$row=mysqli_fetch_array($query,MYSQLI_ASSOC);

				$buyer_id = $row['user_id'];

				$sel_book = "select * from booklist where buyer_id='$buyer_id'";
				$query_book = mysqli_query($con,$sel_book);
				while($row_book = mysqli_fetch_array($query_book,MYSQLI_ASSOC)){
					$sam_array = [];
					$sam_array['book_date'] = $row_book['book_date'];
					$sam_array['book_hour'] = $row_book['book_hour'];

					$worker_id = $row_book['worker_id'];

					$sel_workerData =  "select * from worker where user_id='$worker_id'";
					$query_workerData = mysqli_query($con,$sel_workerData);
					$row_workerlist = mysqli_fetch_array($query_workerData,MYSQLI_ASSOC);

					$sam_array['photo'] = $row_workerlist['photo1'];

					array_push($total_data, $sam_array);
				}				
				echo json_encode(['status'=>'success','detail'=>$total_data]);
			}
			
		}
		else if($status == "save_book")
		{
			$book_date = $request[0]->book_date;
			$book_hour = $request[0]->book_hour;
			$book_street = $request[0]->book_street;
			$worker_email = $request[0]->worker_email;
			$book_price = $request[0]->book_price;
			$buyer_email = $request[0]->buyer_email;
			$book_comment = $request[0]->book_comment;

			$sel = "select * from buyer where email='$buyer_email'";			
			$query = mysqli_query($con,$sel);
			if(!$query){
				echo json_encode(['status'=>'fail','detail'=>'empty email or username']);
				exit;
			}
			else{
				$row=mysqli_fetch_array($query,MYSQLI_ASSOC);


				$sel_worker = "select * from worker where email='$worker_email'";			
				$query_worker = mysqli_query($con,$sel_worker);
				$row_worker=mysqli_fetch_array($query_worker,MYSQLI_ASSOC);

				$buyer_id = $row['user_id'];
				$worker_id = $row_worker['user_id'];

				$insert="INSERT INTO `booklist` (`buyer_id`, `worker_id`, `book_date`, `book_hour`, `book_street`, `book_comment`, `book_price`) VALUES ('$buyer_id', '$worker_id', '$book_date', '$book_hour', '$book_street', '$book_comment', '$book_price')";
				$query_book = mysqli_query($con,$insert);
				echo json_encode(['status'=>'success','detail'=>$buyer_id]);
			}
			
		}
		else{
			echo json_encode(['status'=>'fail','detail'=>'Invaid server error']);
		}
	}
	else {
		echo "Not called properly with username parameter!";
	}


	function policy_order($data, $row_total) {
		$update_data_gen = [];

		$index = 0;
		if($row_total != NULL){

			for($i = 0; $i < sizeof($data); $i++)
			{
				$temp['id'] = $data[$i]['id'];
				$temp['pro'] = $data[$i]['pro'];

				array_push($update_data_gen, $temp);
			}

			for($i = 0; $i < sizeof($row_total); $i++)
			{

				$temp['id'] = $row_total[$i]->id;
				$temp['pro'] = $row_total[$i]->property;

				array_push($update_data_gen, $temp);
			}
		}else{
			for($i = 0; $i < sizeof($data); $i++)
			{
				$temp['id'] = $data[$i]['id'];
				$temp['pro'] = $data[$i]['pro'];

				array_push($update_data_gen, $temp);

			}

			// $update_data_gen = $data;
		}
		return $update_data_gen;

	}

	function compare_data($x) {
		$y = [];
		if($x != NULL){
				$temp['id'] = $x[0]['id'];
				$temp['property'] = $x[0]['pro'];
				array_push($y, $temp);  

			for($i = 0; $i < sizeof($x); $i++){
				$flag_state = false;
				for ($j = 0; $j < sizeof($y); $j++) { 
					if($x[$i]['id'] == $y[$j]['id']){
						switch ($y[$j]['property']) {
							case 'High':
								$flag_state = true;
								break;
							case 'Medium':
								if($x[$i]['pro'] == "Low" || $x[$i]['pro'] == "Medium"){
									$flag_state = true;		
								}
								if($x[$i]['pro'] == "High"){
									$y[$j]['property'] = $x[$i]['pro'];
									$flag_state = true;
								}
								break;				
							case 'Low':

									$y[$j]['property'] = $x[$i]['pro'];
									$flag_state = true;
									break;	
							default:
								break;
						}
					}	
				}
				if(!$flag_state){
					$temp['id'] = $x[$i]['id'];
					$temp['property'] = $x[$i]['pro'];
					array_push($y, $temp);	
				}
			}

		}
	    return $y;
	}























?>
