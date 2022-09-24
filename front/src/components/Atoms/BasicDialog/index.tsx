import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import * as React from "react";

interface BasicDialogProps {
  open: boolean;
  closeDialog: any;
}

const content = {
  title: "Препадователь математики",
  subtitle: "Описание",
  description:
    "Обязательный этап ребенка на пути к взрослой жизни — это получение образования. От выбора места обучения зависит будущий образовательный путь ребенка.  \n\nВ школе-лицее № 101 детей встретят внимательные учителя, которые серьезно и терпеливо занимаются своим делом. \n\nГлавная задача школы-лицея — подготовка школьников для дальнейшего приобретения профильного высшего образования.\n\n",
  wageTitle: "Заработная плата",
  wageCash: "240 000 тенге",
  communicationTitle: "Способ связи",
  communicationEmail: "Email: djfnsjid@gmail.com",
  communicationTel: "Телефон: 34739849304",
};

function BasciDialog(props: BasicDialogProps) {
  return (
    <>
      <Dialog
        onClose={props.closeDialog}
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{content.title}</DialogTitle>
        <DialogContent>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: "16px", fontWeight: 500 }}
          >
            {content.subtitle}
          </Typography>
          <Typography sx={{ whiteSpace: "break-spaces", marginBottom: "32px" }}>
            {content.description}
          </Typography>
          <Typography sx={{ marginBottom: "16px", fontWeight: 500 }}>
            {content.wageTitle}
          </Typography>
          <Typography sx={{ marginBottom: "32px" }}>
            {content.wageCash}
          </Typography>
          <Typography sx={{ marginBottom: "16px", fontWeight: 500 }}>
            {content.communicationTitle}
          </Typography>
          <Typography sx={{ marginBottom: "16px" }}>
            {content.communicationEmail}
          </Typography>
          <Typography sx={{ marginBottom: "16px" }}>
            {content.communicationTel}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeDialog} autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BasciDialog;
