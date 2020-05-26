export const DRUMPADGRID = "DRUMPADGRID";

export const setDrumPadGridAction = (drumPadGrid) => {
  return {
    type: DRUMPADGRID,
    drumPadGrid: drumPadGrid,
  }
}
