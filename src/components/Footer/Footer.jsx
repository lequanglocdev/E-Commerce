import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  Link,
} from "@mui/material";

const Footer = () => {
  return (
    <div className="max-w-[1290px] mx-auto flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <Typography variant="body2">Find a location nearest you.</Typography>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Hotline:
          </Typography>
          <Typography variant="body1">(+00) 123 - 4568</Typography>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Address:
          </Typography>
          <Typography variant="body1">
            512 Howard Street #19
            <br />
            San Francisco, USA.
          </Typography>
        </div>

        <div>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box className="text-black">
            <Link href="#" display="block" underline="none" color="black">
              My Account
            </Link>
            <Link href="#" display="block" underline="none" color="black">
              Cart
            </Link>
            <Link href="#" display="block" underline="none" color="black">
              Wishlist
            </Link>
            <Link href="#" display="block" underline="none" color="black">
              Product Compare
            </Link>
          </Box>
        </div>

        <div>
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>
          <Box>
            <Link href="#" display="block" underline="none" color="black">
              Privacy Policy
            </Link>
            <Link href="#" display="block" underline="none" color="black">
              Refund Policy
            </Link>
            <Link href="#" display="block" underline="none" color="black">
              Shipping & Return
            </Link>
            <Link href="#" display="block" underline="none" color="black">
              Terms & Conditions
            </Link>
          </Box>
        </div>

        <div>
          <Typography variant="h6" gutterBottom>
            Let's Get In Touch
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Subscribe to our newsletter to receive news on update.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              fullWidth
            />
            <IconButton color="primary" sx={{ border: "1px solid #ccc" }}>
              {/* <ArrowForwardIcon /> */}
            </IconButton>
          </Box>
        </div>
      </div>

      <div
        className="flex justify-between items-center mt-10
      ">
        @2024 Foesta shopify theme
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <img src="/visa.png" alt="Visa" width={30} />
          <img src="/mastercard.png" alt="MasterCard" width={30} />
          <img src="/amex.png" alt="Amex" width={30} />
          <img src="/paypal.png" alt="PayPal" width={30} />
          <img src="/discover.png" alt="Discover" width={30} />
        </Box>
      </div>
    </div>
  );
};

export default Footer;
