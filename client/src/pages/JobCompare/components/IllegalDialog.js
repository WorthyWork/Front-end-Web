import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2,pl:"1.5rem" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function IllegalDialog(props) {
  const openDialog = props.openDialog
  const setOpenDialog = props.setOpenDialog
  const sendIllegalData = props.sendIllegalData?props.sendIllegalData:[]

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  // sendIllegalData:
  // 主管機關: "新北市"
  // 事業單位名稱或負責人: "海底撈火鍋股份有限公司"
  // 備註說明: ""
  // 公告日期: "20180420"
  // 罰鍰金額: ""
  // 處分字號: "新北府勞檢字第1073552751號"
  // 處分日期: "20180130"
  // 違反法規內容: "延長工作時間未依規定加給工資"
  // 違法法規法條: "勞動基準法第24條"

  const DetailList = (row,index) => {
    return(
      <div key={index+""}>
      {index===0 ? null:<Divider sx={{borderBottomWidth:"2px",marginTop:"1rem",marginBottom:"1rem"}}variant="middle" /> }
      <Typography gutterBottom>
      主管機關 : {row.主管機關}
      </Typography>
      <Typography gutterBottom>
      處分字號 : {row.處分字號}
      </Typography>
      <Typography gutterBottom>
      處分日期 : {row.處分日期}
      </Typography>
      <Typography gutterBottom>
      違法法規法條 : {row.違法法規法條}
      </Typography>
      <Typography gutterBottom>
      違反法規內容 : {row.違反法規內容}
      </Typography>
      <Typography gutterBottom>
      罰鍰金額 : {row.罰鍰金額?row.罰鍰金額:"-"}
      </Typography> 
      </div> 
    )
  }

  return (
    <div>
      <BootstrapDialog
      fullWidth
       maxWidth="sm"
        onClose={handleCloseDialog}
        open={openDialog}
      >
        <BootstrapDialogTitle   onClose={handleCloseDialog}>
          {sendIllegalData.length>0?sendIllegalData[0].事業單位名稱或負責人:null}
        </BootstrapDialogTitle>
        <DialogContent sx={{"&.MuiDialogContent-root":{pl:"2rem"}}} dividers>
        {sendIllegalData.map((row,index) => (
           DetailList(row,index) 
        ))}

        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
