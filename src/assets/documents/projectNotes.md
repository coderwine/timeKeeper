## 1/12/22
- Components
  - Button: framed for the main functionality. This will need to flip between a start/stop position and pass total time for that day.
  - Timer: framed.
    - Should factor three main measurements: Start, current, stop times. 
- Notes:
  - Main face should probably display only counted time.
  - Should log start/stop time in a separate field for personal records.

## 1/13/22
- Notes:
  - Dashboard for UI should reflect
    - Start/Stop Button
    - Total time accounted for
    - Todays date
    - Company user is tracking for
    - Money earned so far
    - Submit/Check button
  - I really need to sit down and consider how I want to handle the dataflow. My mistake is having an "idea" and just start coding away.

## 1/29/22
- Notes:
  - clearInterval is not stopping the tracker. 
    - Split functions to house a start and stop difference. 
