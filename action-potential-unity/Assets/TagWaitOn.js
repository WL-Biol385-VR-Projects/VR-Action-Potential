#pragma strict

var thing : GameObject;
var objectTag: String;
var duration : float = 1;

function Start () {
    thing.SetActive(false);
}

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        yield WaitForSeconds(duration);
        thing.SetActive(true);
    }
}