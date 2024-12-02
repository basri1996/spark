
import { Box} from '@mui/material';
import Logo from "../../assets/icons/MainLogo.png"
const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 130px)',
      }}
    >
      <Box
        sx={{
          animation: 'pulse 1s infinite linear, delay 1.5s', 
        }}
      >
         <Box component="img" src={Logo} height={"44px"} alt="icon" />
      </Box>

    </Box>
  );
};

export default Loader;
