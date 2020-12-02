// interface content {
//     status: boolean
//     Device: object
// }

export const FilterContent = (
  state: any,
  val: string | number
): { status: boolean; Device: {} } => {
  let status = false;
  let Device = {};
  state.data.forEach((item: any) => {
    if (item.Device_Name === val) {
      status = true;
      console.log(status);
      Device = item;
      return;
    }
  });
  return { status, Device };
};
