#pragma strict

var Na1 : GameObject;
var Na2 : GameObject;
var Na3 : GameObject;
var K1  : GameObject;
var K2  : GameObject;

var ATP  : GameObject;
var ADP  : GameObject;
var Pi   : GameObject;

var Na1Bound : Vector3;
var Na2Bound : Vector3;
var Na3Bound : Vector3;
var K1Bound  : Vector3;
var K2Bound  : Vector3;

var Na1End : Vector3;
var Na2End : Vector3;
var Na3End : Vector3;
var K1End  : Vector3;
var K2End  : Vector3;

private var Na1Start : Vector3;
private var Na2Start : Vector3;
private var Na3Start : Vector3;
private var K1Start  : Vector3;
private var K2Start  : Vector3;

var objectTag : String;
var bindDuration   : float = 1;
var unbindDuration : float = 1;
var ATPduration    : float = 1;
var ADPduration    : float = 1;
var Piduration     : float = 1;

private var startTime : float;
private var phase     : int;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        startTime = Time.time;
        phase = 1;

        Na1Start = Na1.transform.position;
        Na2Start = Na2.transform.position;
        Na3Start = Na3.transform.position;
        K1Start  = K1.transform.position;
        K2Start  = K2.transform.position;
        
    }
}

function Update () {

    if (phase == 1){
       
        Na1.transform.position = Vector3.Lerp(Na1Start, Na1Bound, (Time.time - startTime) / bindDuration);
        Na2.transform.position = Vector3.Lerp(Na2Start, Na2Bound, (Time.time - startTime) / bindDuration);
        Na3.transform.position = Vector3.Lerp(Na3Start, Na3Bound, (Time.time - startTime) / bindDuration);
        
        if (Na1.transform.position == Na1Bound) {
            startTime = Time.time;
            phase += 1;
        }

    }
    if (phase == 2) {
        ATP.SetActive(true);

        if (Time.time > startTime + ATPduration) {
            startTime = Time.time;
            phase += 1;
        }
    }
    if (phase == 3) {
        ATP.SetActive(false);
        ADP.SetActive(true);
        Pi.SetActive(true);

        if (Time.time > startTime + ADPduration) {
            startTime = Time.time;
            phase += 1;
        }
    }
    if (phase == 4) {
        ADP.SetActive(false);

        Na1.transform.position = Vector3.Lerp(Na1Bound, Na1End, (Time.time - startTime) / unbindDuration);
        Na2.transform.position = Vector3.Lerp(Na2Bound, Na2End, (Time.time - startTime) / unbindDuration);
        Na3.transform.position = Vector3.Lerp(Na3Bound, Na3End, (Time.time - startTime) / unbindDuration);

        if (Na1.transform.position == Na1End) {
            startTime = Time.time;
            phase += 1;
        }
    }
    if (phase == 5) {

        K1.transform.position  = Vector3.Lerp(K1Start, K1Bound, (Time.time - startTime) / bindDuration);
        K2.transform.position  = Vector3.Lerp(K2Start, K2Bound, (Time.time - startTime) / bindDuration);

        if (K1.transform.position == K1Bound) {
            startTime = Time.time;
            phase += 1;
        }
    }
    if (phase == 6) {

        if (Time.time > startTime + Piduration) {
            startTime = Time.time;
            phase += 1;
        }
    }
    if (phase == 7) {

        Pi.SetActive(false);

        K1.transform.position  = Vector3.Lerp(K1Bound, K1End, (Time.time - startTime) / unbindDuration);
        K2.transform.position  = Vector3.Lerp(K2Bound, K2End, (Time.time - startTime) / unbindDuration);

        if (K1.transform.position == K1End) {
            Na1.transform.position = Na1Start;
            Na2.transform.position = Na2Start;
            Na3.transform.position = Na3Start;
            K1.transform.position = K1Start;
            K2.transform.position = K2Start;

            phase = 1;
            startTime = Time.time;
        }

    }

}