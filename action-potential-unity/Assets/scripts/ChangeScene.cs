using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class ChangeScene : MonoBehaviour
{

	public string scene;

	void OnTriggerEnter()
	{
		SceneManager.LoadScene(scene);


	}
}