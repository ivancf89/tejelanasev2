import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ServiceCard({ image, title, description }) {
  return (
    <Card sx={{ width: 250, margin: 2 }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        sx={{ backgroundColor: "#ccc" }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Ver más</Button>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
