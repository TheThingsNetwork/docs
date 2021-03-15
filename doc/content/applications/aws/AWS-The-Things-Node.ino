#include <TheThingsNode.h>

/* Decoder payload function

function Decoder(bytes, port) {
  var colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "white", "black"];
  var decoded = {
    light: (bytes[0] << 8) | bytes[1],
    temperature: ((bytes[2] << 8) | bytes[3]) / 100,
    state: {
      color: colors[bytes[4]]
    }
  };

  return decoded;
}

 */

const char *appEui = "0000000000000000";
const char *appKey = "00000000000000000000000000000000";

#define loraSerial Serial1
#define debugSerial Serial

// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan REPLACE_ME

TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);
TheThingsNode *node;

void setup()
{
  loraSerial.begin(57600);
  debugSerial.begin(9600);

  while (!debugSerial && millis() < 10000)
    ;

  node = TheThingsNode::setup();
  node->setColor(TTN_BLUE);

  node->configLight(true);
  node->configInterval(true, 10000);
  node->configTemperature(true);
  node->onInterval(interval);

  ttn.showStatus();
  ttn.join(appEui, appKey);
  ttn.onMessage(receiveData);
  node->setColor(TTN_GREEN);
}

void loop()
{
  node->loop();
}

void interval()
{
  debugSerial.println("-- SEND: INTERVAL");
  sendData();
}

void sendData()
{
  node->showStatus();

  byte payload[5];

  uint16_t light = node->getLight();
  payload[0] = highByte(light);
  payload[1] = lowByte(light);

  int16_t temperature = node->getTemperatureAsFloat() * 100;
  payload[2] = highByte(temperature);
  payload[3] = lowByte(temperature);

  payload[4] = node->getColor();

  ttn.sendBytes(payload, sizeof(payload), 1);
}

void receiveData(const uint8_t *payload, size_t size, port_t port) {
  if (size < 1) {
    return;
  }

  debugSerial.println("Changing color to " + String(payload[0]));
  node->setColor(payload[0]);
}
