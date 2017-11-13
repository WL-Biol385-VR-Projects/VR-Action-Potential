#pragma strict

var onObject : GameObject;
var offObject : GameObject;
var objectTag : String;

function OnTriggerEnter (otherObject : Collider) {
    if(otherObject.gameObject.tag == objectTag){
        onObject.SetActive(true);
        offObject.SetActive(false);
    }
}
