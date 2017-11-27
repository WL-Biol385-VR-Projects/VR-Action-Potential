#pragma strict

var thingOn : GameObject;
var thingOff : GameObject;
var objectTag: String;
var duration : float = 1;


function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        yield WaitForSeconds(duration);
        thingOn.SetActive(true);
        thingOff.SetActive(false);
    }
}