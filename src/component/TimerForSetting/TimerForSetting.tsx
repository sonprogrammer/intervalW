import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRoundStore } from "../../store/useRoundStore";




const TimerForSetting = () => {
  const { hours, minutes, seconds, setHours, setMinutes, setSeconds } = useRoundStore();

    return (
      <Box display="flex" gap={2} sx={{justifyContent:'center'}}>
        <FormControl>
          <InputLabel>시</InputLabel>
          <Select value={hours} 
              label="시" 
              onChange={(e) => setHours(Number(e.target.value))}
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
                  onChange={(e) => setMinutes(Number(e.target.value))}
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
                  onChange={(e) => setSeconds(Number(e.target.value))}
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
