export interface Menu {
  menuDivisions: Array<{
    menuItems: Array<{
      dishName: string,
      dishDescription: string,
      dishPrice: number,
      dishPicUrl: string
    }>,
    divisionName: string
  }>
}
