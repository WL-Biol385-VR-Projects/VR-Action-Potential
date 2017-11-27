#pragma strict

var thingtomove : GameObject;
var objectTag : String;
var startPoint : Vector3;
var endPoint : Vector3;
var duration : float = 1;
//var yourVar = false;


//private var startPoint : Vector3;

private var startTime : float;
private var yourVar = false;

//function Start() {
//   startPoint = transform.position;
// startTime = Time.time;
//}

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        yourVar = true;
        startTime = Time.time;
    }
}

function Update () {
    if(yourVar == true){
        thingtomove.transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
        if(thingtomove.transform.position == endPoint) {
            startTime = Time.time;
            thingtomove.transform.position = startPoint;
        }
    }
}