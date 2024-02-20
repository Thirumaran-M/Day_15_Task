var ele = document.createElement("div");
ele.className="container";

var ele1 = document.createElement("div");
ele1.className="row";

var ele2 = document.createElement("div");
ele2.className="col";
ele2.innerHTML="this is col";

ele1.append(ele2);
ele.append(ele1);
document.body.append(ele);