import { LivetoolsPlugin } from "livetools-plugin/backend/plugin";
import { ILivetoolsServer } from "livetools-plugin/backend/server";

export default class LiveToolsUsers extends LivetoolsPlugin {

  override get name():string {
    return "users";
  }

  constructor(server: ILivetoolsServer) {
    super(server);
  }



};


