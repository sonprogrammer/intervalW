import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";



interface TimerForSettingProps {
  hours: number;
  minutes: number;
  seconds: number;
  onChangeHours: (h: number) => void;
  onChangeMinutes: (m: number) => void;
  onChangeSeconds: (s: number) => void;
}
const TimerForSetting = ({ hours, minutes, seconds, onChangeHours, onChangeMinutes, onChangeSeconds }: TimerForSettingProps) => {
 
    return (
      <Box display="flex" gap={2}>
        <FormControl>
          <InputLabel>시</InputLabel>
          <Select value={hours} 
              label="시" 
              onChange={(e) => onChangeHours(Number(e.target.value))}
              MenuProps={{
                  PaperProps: {
                      style:{
                          maxHeight: 36*5,
                          overflowY: 'auto'
                      }
                  }
              }}
          >
            {[...Array(24)].map((_, i) => (
              <MenuItem key={i} value={i}>{i}</MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <FormControl>
          <InputLabel>분</InputLabel>
          <Select value={minutes}
                  label="분" 
                  onChange={(e) => onChangeMinutes(Number(e.target.value))}
                  MenuProps={{
                      PaperProps: {
                          style:{
                              maxHeight: 36*5,
                              overflowY: 'auto'
                          }
                      }
                  }}
          >
            {[...Array(60)].map((_, i) => (
              <MenuItem key={i} value={i}>{i}</MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <FormControl>
          <InputLabel>초</InputLabel>
          <Select value={seconds} 
                  label="초" 
                  onChange={(e) => onChangeSeconds(Number(e.target.value))}
                  MenuProps={{
                      PaperProps: {
                          style:{
                              maxHeight: 36*5,
                              overflowY: 'auto'
                          }
                      }
                  }}
                  >
            {[...Array(60)].map((_, i) => (
              <MenuItem key={i} value={i}>{i}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
  )
}

export default TimerForSetting
