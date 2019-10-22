/**************************State district drop down menu start***************************************/
var districtByState = {

		 "Andaman and Nicobar Islands":[  
            "Nicobar",
            "North And Middle Andaman",
            "South Andaman", 
         ],
     
      
         "Andhra Pradesh":[  
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa"
         ],
      
         "Arunachal Pradesh":[  
            "Tawang",
            "West Kameng",
            "East Kameng",
            "Papum Pare",
            "Kurung Kumey",
            "Kra Daadi",
            "Lower Subansiri",
            "Upper Subansiri",
            "West Siang",
            "East Siang",
            "Siang",
            "Upper Siang",
            "Lower Siang",
            "Lower Dibang Valley",
            "Dibang Valley",
            "Anjaw",
            "Lohit",
            "Namsai",
            "Changlang",
            "Tirap",
            "Longding"
         ],
      
         "Assam":[  
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Dima Hasao",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
         ],
      
         "Bihar":[  
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran (Motihari)",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur (Bhabua)",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger (Monghyr)",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia (Purnea)",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
         ],
      
         "Chandigarh (UT)":[  
            "Chandigarh"
         ],
      
         "Chhattisgarh":[  
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada (South Bastar)",
            "Dhamtari",
            "Durg",
            "Gariyaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham (Kawardha)",
            "Kanker (North Bastar)",
            "Kondagaon",
            "Korba",
            "Korea (Koriya)",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur  ",
            "Surguja"
         ],
      
         "Dadra and Nagar Haveli (UT)":[  
            "Dadra & Nagar Haveli"
         ],
      
         "Daman and Diu (UT)":[  
            "Daman",
            "Diu"
         ],
      
         "Delhi (NCT)":[  
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "North Delhi",
            "North East  Delhi",
            "North West  Delhi",
            "Shahdara",
            "South Delhi",
            "South East Delhi",
            "South West  Delhi",
            "West Delhi"
         ],
      
         "Goa":[  
            "North Goa",
            "South Goa"
         ],
      
         "Gujarat":[  
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha (Palanpur)",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udepur",
            "Dahod",
            "Dangs (Ahwa)",
            "Devbhoomi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kachchh",
            "Kheda (Nadiad)",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada (Rajpipla)",
            "Navsari",
            "Panchmahal (Godhra)",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha (Himmatnagar)",
            "Surat",
            "Surendranagar",
            "Tapi (Vyara)",
            "Vadodara",
            "Valsad"
         ],
      
         "Haryana":[  
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurgaon",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Mewat",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
         ],
      
         "Himachal Pradesh":[  
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul &amp; Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur (Sirmour)",
            "Solan",
            "Una"
         ],
      
         "Jammu and Kashmir":[  
            "Anantnag",
            "Bandipore",
            "Baramulla",
            "Budgam",
            "Doda",
            "Ganderbal",
            "Jammu",
            "Kargil",
            "Kathua",
            "Kishtwar",
            "Kulgam",
            "Kupwara",
            "Leh",
            "Poonch",
            "Pulwama",
            "Rajouri",
            "Ramban",
            "Reasi",
            "Samba",
            "Shopian",
            "Srinagar",
            "Udhampur"
         ],
      
         "Jharkhand":[  
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
         ],
      
         "Karnataka":[  
            "Bagalkot",
            "Ballari (Bellary)",
            "Belagavi (Belgaum)",
            "Bengaluru (Bangalore) Rural",
            "Bengaluru (Bangalore) Urban",
            "Bidar",
            "Chamarajanagar",
            "Chikballapur",
            "Chikkamagaluru (Chikmagalur)",
            "Chitradurga",
            "Dakshina Kannada",
            "Davangere",
            "Dharwad",
            "Gadag",
            "Hassan",
            "Haveri",
            "Kalaburagi (Gulbarga)",
            "Kodagu",
            "Kolar",
            "Koppal",
            "Mandya",
            "Mysuru (Mysore)",
            "Raichur",
            "Ramanagara",
            "Shivamogga (Shimoga)",
            "Tumakuru (Tumkur)",
            "Udupi",
            "Uttara Kannada (Karwar)",
            "Vijayapura (Bijapur)",
            "Yadgir"
         ],
      
         "Kerala":[  
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
         ],
      
         "Lakshadweep (UT)":[  
            "Agatti",
            "Amini",
            "Androth",
            "Bithra",
            "Chethlath",
            "Kavaratti",
            "Kadmath",
            "Kalpeni",
            "Kilthan",
            "Minicoy"
         ],
      
         "Madhya Pradesh":[  
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
         ],
      
         "Maharashtra":[  
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai Suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
         ],
      
         "Manipur":[  
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
         ],
      
         "Meghalaya":[  
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills ",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
         ],
      
         "Mizoram":[  
            "Aizawl",
            "Champhai",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Serchhip"
         ],
      
         "Nagaland":[  
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"
         ],
      
         "Odisha":[  
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghapur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar (Keonjhar)",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Sonepur",
            "Sundargarh"
         ],
      
         "Puducherry (UT)":[  
            "Karaikal",
            "Mahe",
            "Pondicherry",
            "Yanam"
         ],
      
         "Punjab":[  
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Nawanshahr (Shahid Bhagat Singh Nagar)",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Tarn Taran"
         ],
      
         "Rajasthan":[  
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"
         ],
      
         "Sikkim":[  
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"
         ],
      
         "Tamil Nadu":[  
            "Ariyalur",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Salem",
            "Sivaganga",
            "Thanjavur",
            "Theni",
            "Thoothukudi (Tuticorin)",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
         ],
      
         "Telangana":[  
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhoopalpally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahabubnagar",
            "Mancherial",
            "Medak",
            "Medchal",
            "Nagarkurnool",
            "Nalgonda",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal (Rural)",
            "Warangal (Urban)",
            "Yadadri Bhuvanagiri"
         ],
      
         "Tripura":[  
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"
         ],
      
         "Uttarakhand":[  
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
         ],
      
         "Uttar Pradesh":[  
            "Agra",
            "Aligarh",
            "Allahabad",
            "Ambedkar Nagar",
            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
            "Amroha (J.P. Nagar)",
            "Auraiya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Faizabad",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur (Panchsheel Nagar)",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kanshiram Nagar (Kasganj)",
            "Kaushambi",
            "Kushinagar (Padrauna)",
            "Lakhimpur - Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "RaeBareli",
            "Rampur",
            "Saharanpur",
            "Sambhal (Bhim Nagar)",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamali (Prabuddh Nagar)",
            "Shravasti",
            "Siddharth Nagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
         ],
      
         "West Bengal":[  
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Burdwan (Bardhaman)",
            "Cooch Behar",
            "Dakshin Dinajpur (South Dinajpur)",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Medinipur)",
            "Purba Medinipur (East Medinipur)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"
         ]
   
     
            
}
function makeSubmenu(value) {
if(value.length==0) document.getElementById("district").innerHTML = "<option></option>";
else {
var districtOptions = "";
for(districtId in districtByState[value]) {
districtOptions+="<option>"+districtByState[value][districtId]+"</option>";
}
document.getElementById("district").innerHTML = districtOptions;
}
}

/**************************State district drop down menu end***************************************/

/************************** form validation start ***************************************/
function validation()
{
      var instituteCategory = document.forms["insRegForm"]["instituteCategory"]; 
      var instituteName = document.forms["insRegForm"]["instituteName"];
      var state = document.forms["insRegForm"]["state"];               
      var district = document.forms["insRegForm"]["district"];
      var instituteCode = document.forms["insRegForm"]["instituteCode"]; 
      var location = document.forms["insRegForm"]["location"]; 
      var type = document.forms["insRegForm"]["type"];              
      var aff = document.forms["insRegForm"]["aff"]; 
      var affUniName = document.forms["insRegForm"]["affUniName"];              
      var yearFromAdmissionStarted = document.forms["insRegForm"]["yearFromAdmissionStarted"];


      var instituteEstablishmentCerti = document.forms["insRegForm"]["instituteEstablishmentCerti"];
      var uniAffCerti = document.forms["insRegForm"]["uniAffCerti"];


      var ispwd = document.forms["insRegForm"]["ispwd"];
      var iconfpwd = document.forms["insRegForm"]["iconfpwd"];  
      /*var ilineOne = document.forms["insRegForm"]["ilineOne"];
      var ilineTwo = document.forms["insRegForm"]["ilineTwo"]; 
      var icity = document.forms["insRegForm"]["icity"];
      var istate = document.forms["insRegForm"]["istate"];*/
      var address = document.forms["insRegForm"]["address"]
      var principalName = document.forms["insRegForm"]["principalName"]; 
      var principalMobileNumber = document.forms["insRegForm"]["principalMobileNumber"];
      var iaccept = document.forms["insRegForm"]["iaccept"];

      var submit="true";
      var alphaExp = /^[a-zA-Z]+$/;
      var phoneno = /^\d{10}$/;

      var date = document.getElementById("yearFromAdmissionStarted").value;
      var varDate = new Date(date); //dd-mm-YYYY
      var today = new Date();


       if (instituteCategory.value=="defaultVal")                                  
      { 
           document.getElementById('instituteCategory_error').innerHTML = "** field can't be empty";
           instituteCategory.focus(); 
           submit="false"; 
       }

       if (instituteName.value == "")                               
       { 
          document.getElementById('instituteName_error').innerHTML = "** field can't be empty";
          instituteName.focus(); 
          submit="false"; 
      } 
      
   
      
      if (state.value == "defaultVal")                                  
      { 
           document.getElementById('state_error').innerHTML = "** field can't be empty";
           state.focus(); 
           submit="false"; 
       } 
   
       if (district.value == "defaultVal")                               
       { 
          document.getElementById('district_error').innerHTML = "** field can't be empty";
          district.focus(); 
          submit="false"; 
      } 
      
      if (instituteCode.value == "")                                  
      { 
           document.getElementById('instituteCode_error').innerHTML = "** field can't be empty";
           instituteCode.focus(); 
           submit="false"; 
      }
      if (location.value == "defaultVal")                                  
      { 
           document.getElementById('location_error').innerHTML = "** field can't be empty";
           location.focus(); 
           submit="false"; 
       }  
       
      if (type.value == "defaultVal")                                  
      { 
           document.getElementById('type_error').innerHTML = "** field can't be empty";
           type.focus(); 
           submit="false"; 
       }  
   
       if (aff.value == "defaultVal")                               
       { 
          document.getElementById('aff_error').innerHTML = "** field can't be empty";
          aff.focus(); 
          submit="false"; 
      } 
      if (affUniName.value == "defaultVal")                                  
      { 
           document.getElementById('affUniName_error').innerHTML = "** field can't be empty";
           affUniName.focus(); 
           submit="false"; 
       }  
   
       if (yearFromAdmissionStarted.value == "")                               
       { 
          document.getElementById('yearFromAdmissionStarted_error').innerHTML = "** field can't be empty";
          yearFromAdmissionStarted.focus(); 
          submit="false"; 
      } 
      if(varDate >= today) 
      {
          document.getElementById('yearFromAdmissionStarted_error').innerHTML = "** date invalid";
          yearFromAdmissionStarted.focus(); 
          submit="false"; 
      }




      if (instituteEstablishmentCerti.value == "")                               
       { 
          document.getElementById('instituteEstablishmentCerti_error').innerHTML = "** field can't be empty";
          instituteEstablishmentCerti.focus(); 
          submit="false"; 
      } 

      if (uniAffCerti.value == "")                               
       { 
          document.getElementById('uniAffCerti_error').innerHTML = "** field can't be empty";
          uniAffCerti.focus(); 
          submit="false"; 
      } 




      if (ispwd.value == "")                               
       { 
          document.getElementById('ispwd_error').innerHTML = "** field can't be empty";
          ispwd.focus(); 
          submit="false"; 
      } 
      if (iconfpwd.value == "")                               
       { 
          document.getElementById('iconfpwd_error').innerHTML = "** field can't be empty";
          iconfpwd.focus(); 
          submit="false"; 
      } 
      if (iconfpwd.value != ispwd.value)                               
       { 
          alert ("password not matching");
          iconfpwd.focus(); 
          submit="false"; 
      } 
      /*if (ilineOne.value == "")                               
       { 
          document.getElementById('ilineOne_error').innerHTML = "** field can't be empty";
          ilineOne.focus(); 
          submit="false"; 
      } 
      if (ilineTwo.value == "")                               
       { 
          document.getElementById('ilineTwo_error').innerHTML = "** field can't be empty";
          ilineTwo.focus(); 
          submit="false"; 
      } 
      if (icity.value == "")                               
       { 
          document.getElementById('icity_error').innerHTML = "** field can't be empty";
          icity.focus(); 
          submit="false"; 
      } 
      if (istate.value == "")                               
       { 
          document.getElementById('istate_error').innerHTML = "** field can't be empty";
          istate.focus(); 
          submit="false"; 
      } */
      if (address.value == "")                               
       { 
          document.getElementById('address_error').innerHTML = "** field can't be empty";
          address.focus(); 
          submit="false"; 
      } 
      if (principalName.value == "")                               
       { 
          document.getElementById('principalName_error').innerHTML = "** field can't be empty";
          principalName.focus(); 
          submit="false"; 
      } 
      if (principalMobileNumber.value == "")                               
       { 
          document.getElementById('principalMobileNumber_error').innerHTML = "** field can't be empty";
          principalMobileNumber.focus(); 
          submit="false"; 
      } 
      if (principalMobileNumber.value.match(phoneno))                               
       { 
         // document.getElementById('principalMobileNumber_error').innerHTML = "** invalid number";
          principalMobileNumber.focus(); 
          submit="true"; 
      } 
      else
      {
            document.getElementById('principalMobileNumber_error').innerHTML = "** invalid number";
          principalMobileNumber.focus(); 
          submit="false"; 
      }
      if(!iaccept.checked)
      {
            alert('You must agree to the terms first.');
            submit="false";
      }

      return submit;
}
function removeWarning()
{
      document.getElementById(this.id + "_error").innerHTML= "";
}
document.getElementById("instituteCategory").onchange= removeWarning;
document.getElementById("instituteName").onchange= removeWarning;
document.getElementById("state").onclick= removeWarning;
document.getElementById("district").onchange= removeWarning;
document.getElementById("instituteCode").onkeyup= removeWarning;
document.getElementById("location").onclick= removeWarning;
document.getElementById("type").onchange= removeWarning;
document.getElementById("aff").onchange= removeWarning;
document.getElementById("affUniName").onchange= removeWarning;
document.getElementById("yearFromAdmissionStarted").onchange= removeWarning;
document.getElementById("ispwd").onkeyup= removeWarning;
document.getElementById("iconfpwd").onkeyup= removeWarning;
/*document.getElementById("ilineOne").onkeyup= removeWarning;
document.getElementById("ilineTwo").onkeyup= removeWarning;
document.getElementById("icity").onkeyup= removeWarning;
document.getElementById("istate").onkeyup= removeWarning;*/
document.getElementById("address").onkeyup= removeWarning;
document.getElementById("principalName").onkeyup= removeWarning;
document.getElementById("principalMobileNumber").onkeyup= removeWarning;
document.getElementById("itele").onkeyup= removeWarning;




/************************** form validation end***************************************/

