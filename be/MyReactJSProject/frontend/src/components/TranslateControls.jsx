import * as React from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TextFieldsIcon from "@mui/icons-material/TextFields";

function TranslateControls() {
  return (
    <div className="site-section" id="translate-area">
      <h1>Type something that you want to translate...</h1>
      <ButtonGroup variant="outlined" disableElevation>
        <Button startIcon={<TextFieldsIcon />}>Dịch từ</Button>
        <Button startIcon={<GTranslateIcon />}>Dịch văn bản</Button>
        <Button startIcon={<SwapHorizIcon />}>Chuyển đổi</Button>
      </ButtonGroup>

      <div className="translate-container">
        {/* Input bên trái */}
        <div className="translate-input">
          <TextField
            fullWidth
            multiline
            minRows={6}
            label="Nhập từ/đoạn cần dịch"
            variant="outlined"
          />
        </div>

        {/* Kết quả bên phải */}
        <div className="translate-result">
          <p>Kết quả dịch ở đây...</p>
        </div>
      </div>
    </div>
  );
}

export default TranslateControls;
