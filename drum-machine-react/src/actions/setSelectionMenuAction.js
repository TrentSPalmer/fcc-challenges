export const SELECTIONMENU = "SELECTIONMENU";

export const setSelectionMenuAction = (selectionMenu) => {
  return {
    type: SELECTIONMENU,
    selectionMenu: selectionMenu,
  }
}
