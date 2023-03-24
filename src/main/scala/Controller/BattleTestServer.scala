package Controller

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import com.corundumstudio.socketio.{AckRequest, Configuration, SocketIOClient, SocketIOServer}
import com.corundumstudio.socketio.listener.{ConnectListener, DataListener, DisconnectListener}

import java.lang.module.Configuration
import play.api.libs.json.Json

  def partyJSON(name: String): String = {
    val characters = Json.toJson(List(
      Json.toJson(Map(
        "name" -> Json.toJson("Bruiser_1_" + name),
        "type" -> Json.toJson("bruiser"),
        "lvl" -> Json.toJson(10),
        "curHP" -> Json.toJson(100),
        "curMP" -> Json.toJson(0),
        "alive" -> Json.toJson(true),
        "maxHP" -> Json.toJson(100),
        "maxMP" -> Json.toJson(0),
        "def" -> Json.toJson(10),
        "magDef" -> Json.toJson(10),
        "lvlUpExp" -> Json.toJson(100),
        "AD" -> Json.toJson(60),
        "AP" -> Json.toJson(0),
        "Exp" -> Json.toJson(0)
      )),
      Json.toJson(Map(
        "name" -> Json.toJson("Bruiser_2_" + name),
        "type" -> Json.toJson("bruiser"),
        "lvl" -> Json.toJson(10),
        "curHP" -> Json.toJson(100),
        "curMP" -> Json.toJson(0),
        "alive" -> Json.toJson(true),
        "maxHP" -> Json.toJson(100),
        "maxMP" -> Json.toJson(0),
        "def" -> Json.toJson(10),
        "magDef" -> Json.toJson(10),
        "lvlUpExp" -> Json.toJson(100),
        "AD" -> Json.toJson(60),
        "AP" -> Json.toJson(0),
        "Exp" -> Json.toJson(0)
      )),
      Json.toJson(Map(
        "name" -> Json.toJson("Bruiser_3_" + name),
        "type" -> Json.toJson("bruiser"),
        "type" -> Json.toJson("bruiser"),
        "lvl" -> Json.toJson(10),
        "curHP" -> Json.toJson(100),
        "curMP" -> Json.toJson(0),
        "alive" -> Json.toJson(true),
        "maxHP" -> Json.toJson(100),
        "maxMP" -> Json.toJson(0),
        "def" -> Json.toJson(10),
        "magDef" -> Json.toJson(10),
        "lvlUpExp" -> Json.toJson(100),
        "AD" -> Json.toJson(60),
        "AP" -> Json.toJson(0),
        "Exp" -> Json.toJson(0)
      )),
      Json.toJson(Map(
        "name" -> Json.toJson("Bruiser_4_" + name),
        "type" -> Json.toJson("bruiser"),
        "type" -> Json.toJson("bruiser"),
        "lvl" -> Json.toJson(10),
        "curHP" -> Json.toJson(100),
        "curMP" -> Json.toJson(0),
        "alive" -> Json.toJson(true),
        "maxHP" -> Json.toJson(100),
        "maxMP" -> Json.toJson(0),
        "def" -> Json.toJson(10),
        "magDef" -> Json.toJson(10),
        "lvlUpExp" -> Json.toJson(100),
        "AD" -> Json.toJson(60),
        "AP" -> Json.toJson(0),
        "Exp" -> Json.toJson(0)
      )),
    ))
    val JSONMap = Json.stringify(characters)

    JSONMap
  }

}


object BattleTestServer {

  def main(args: Array[String]): Unit = {
    val actorSystem = ActorSystem()


  }
}