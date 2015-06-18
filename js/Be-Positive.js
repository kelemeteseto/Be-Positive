BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    // give a random blood type to anyone
    // very bad idea!
    // return [
    //   BloodType.AB_POS,
    //   BloodType.AB_NEG,
    //   BloodType.A_POS,
    //   BloodType.A_NEG
    // ][Math.floor(Math.random()*4)];

    // console.log(BloodType);

    // for(var key in blood_inventory) {
    //   var value = blood_inventory[key];

    //   if (value < 1) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };

    console.log(blood_inventory.BloodType.A_POS);

    switch (patient.blood_type) {
      case BloodType.AB_POS:
      return BloodType.AB_POS;
      break;

      case BloodType.AB_NEG:
      return BloodType.AB_NEG;
      break;

      case BloodType.A_POS:
      return BloodType.A_POS;
      break;

      case BloodType.A_NEG:
      return BloodType.A_NEG;
      break;

      case BloodType.B_POS:
      return BloodType.B_POS;
      break;

      case BloodType.B_NEG:
      return BloodType.B_NEG;
      break;

      case BloodType.O_POS:
      return BloodType.O_POS;
      break;

      case BloodType.O_NEG:
      return BloodType.O_NEG;
      break;

      default:
      return false;
    }

  }

};