// ===============================
// Official KSTDC Guides
// ===============================

const guides = [

{
name:"T.K. Sundar Raju",
id:"28",
phone:"9945034561"
},

{
name:"Ramesh",
id:"628",
phone:"9901257053"
},

{
name:"Sayad Dastagir",
id:"27",
phone:"9342223749"
},

{
name:"S.R. Prasad",
id:"123",
phone:"9341802564"
},

{
name:"Nagaraj",
id:"276",
phone:"9845073039"
},

{
name:"R. Nataraj",
id:"15",
phone:"9342723741"
},

{
name:"G.V. Srinivas",
id:"202",
phone:"9342933940"
},

{
name:"Krithi Kiran Singh",
id:"267",
phone:"9342339736"
},

{
name:"Rajashakar",
id:"235",
phone:"9880626349"
},

{
name:"Najir Ahamad",
id:"438",
phone:"9880515182"
},

{
name:"S. Krishna",
id:"37",
phone:"9844329327"
},

{
name:"P. Nagesh",
id:"659",
phone:"8762033001"
},

{
name:"Satyanarayana",
id:"12",
phone:"9845496167"
}

];

// ===============================
// Booking Form
// ===============================

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const visitor = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const visitors = document.getElementById("visitors").value;
    const visitorType = document.getElementById("visitorType").value;
    const guide = document.getElementById("guide").value;
    const payment = document.getElementById("payment").value;

    // Generate Booking ID

    const bookingID = "MP" + Math.floor(100000 + Math.random() * 900000);

    // Save Booking Details

    localStorage.setItem("bookingID", bookingID);
    localStorage.setItem("visitor", visitor);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("date", date);
    localStorage.setItem("visitors", visitors);
    localStorage.setItem("visitorType", visitorType);
    localStorage.setItem("payment", payment);

    // Assign Guide Only If Required

    if(guide === "yes"){

        const randomGuide = guides[Math.floor(Math.random() * guides.length)];

        localStorage.setItem("guideRequired","Yes");
        localStorage.setItem("guideName",randomGuide.name);
        localStorage.setItem("guideID",randomGuide.id);
        localStorage.setItem("guidePhone",randomGuide.phone);

    }

    else{

        localStorage.setItem("guideRequired","No");
        localStorage.setItem("guideName","No Guide Requested");
        localStorage.setItem("guideID","-");
        localStorage.setItem("guidePhone","-");

    }

    // Redirect to Booking Success Page

    window.location.href = "booking-success.html";

});