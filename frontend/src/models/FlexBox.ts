type FlexBoxJustifyAndAlignments = 
"center" 
| "flex-start" 
| "flex-end"
| "space-evenly"
| "space-around"
| "space-between" 

export interface FlexBoxModel {
  flex?: number;
  flexDirection?: "column" | "row";
  alignItems?: FlexBoxJustifyAndAlignments;
  justifyContent?: FlexBoxJustifyAndAlignments;
  gap?: number;

  fullWidth?: boolean;
}