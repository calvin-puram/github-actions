const core = require("@actions/core");
const github = require("@actions/github");

var currentdate = new Date();
var datetime =
  "Last Sync: " +
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

try {
  const name = core.getInput("staff-name", { required: true });
  const tag = `thanks for your time ${name}`;
  const payload = JSON.stringify(github.context.payload)

  core.info("setting current time");
  core.setOutput(`current message time ${datetime}`);
  core.setOutput(tag);
  console.log("event payload", payload)
} catch (error) {
  core.setFailed(`Action failed with error ${error}`);
}
