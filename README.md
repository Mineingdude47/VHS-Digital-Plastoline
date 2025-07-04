# VHS Digital Plastoline

A React Native Expo app for VHS to digital conversion services by Atomedia Productions LLC.

## Features

- **VHS Digitization Service**: Professional VHS to digital conversion at $5 per tape
- **Order Management**: Complete order flow from tape selection to checkout
- **Shipping Integration**: Automatic shipping label generation
- **Payment Processing**: Secure payment form integration
- **Environmental Mission**: Supporting plastic-to-fuel research through VHS case recycling

## Project Structure

```
VHS-Digital-Plastoline/
├── app/                    # Expo Router pages
│   ├── index.tsx          # Home page
│   ├── service.tsx        # Service details
│   ├── order.tsx          # Order placement
│   ├── checkout.tsx       # Checkout process
│   ├── confirmation.tsx   # Order confirmation
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── components/            # Reusable components
│   ├── Button.tsx         # Custom button component
│   ├── AddressForm.tsx    # Shipping address form
│   ├── PaymentForm.tsx    # Payment information form
│   ├── TapeCounter.tsx    # VHS tape quantity selector
│   ├── OrderSummary.tsx   # Order details display
│   └── ShippingLabel.tsx  # Shipping label component
├── constants/             # App constants
│   ├── colors.ts          # Color scheme
│   └── shipping.ts        # Shipping configuration
├── store/                 # State management
│   └── orderStore.ts      # Order state store
├── types/                 # TypeScript type definitions
│   └── order.ts           # Order-related types
├── utils/                 # Utility functions
│   └── validation.ts      # Form validation
└── assets/                # Static assets
    ├── Images/            # Image files
    └── Videos/            # Video files
```

## Assets

### Images
- `IMG_0807.JPG` - Hero image for home page
- `IMG_0844.HEIC` - Mission section image
- `IMG_0845.HEIC` - Service page image
- `IMG_0846.HEIC` - Additional content image
- `IMG_0847.HEIC` - Additional content image

### Videos
- `IMG_0808.MOV` - VHS digitization process video
- `IMG_0810.MOV` - Additional process video
- `IMG_0812.MOV` - Extended process video
- `2nd_page.MOV` - Secondary page video
- `plastoline_Footer_Video.mp4` - Footer promotional video

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd VHS-Digital-Plastoline
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Usage

### Development
- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

### Building
- `expo build:android` - Build Android APK
- `expo build:ios` - Build iOS app
- `expo build:web` - Build web version

## Key Features

### 1. Home Page (`app/index.tsx`)
- Company introduction and mission
- Service overview with pricing
- Environmental impact explanation
- Step-by-step process guide
- Local image integration

### 2. Service Details (`app/service.tsx`)
- Detailed service information
- What's included in the service
- Process explanation
- Local image display

### 3. Order Flow
- **Order Page** (`app/order.tsx`): Tape quantity selection
- **Checkout Page** (`app/checkout.tsx`): Shipping and payment
- **Confirmation Page** (`app/confirmation.tsx`): Order success

### 4. Components
- **TapeCounter**: Interactive tape quantity selector
- **AddressForm**: Complete shipping information form
- **PaymentForm**: Secure payment information collection
- **OrderSummary**: Order details and pricing display
- **ShippingLabel**: Printable shipping label generation

## State Management

The app uses a simple state management system in `store/orderStore.ts` to handle:
- Order details (tape count, pricing)
- Shipping address information
- Payment information
- Order status and tracking

## Validation

Form validation is handled in `utils/validation.ts` with functions for:
- Email validation
- Phone number validation
- Credit card validation
- Address validation

## Styling

The app uses a consistent color scheme defined in `constants/colors.ts`:
- Primary: #4A90E2 (Blue)
- Secondary: #F5A623 (Orange)
- Text colors and grays for UI elements

## Environmental Mission

This app supports Atomedia Productions' environmental mission of converting VHS plastic cases into plasto-line fuel alternative. By choosing this service, customers contribute to sustainable technology development.

## Contact

For questions or support:
- Email: bookingatomedia47@gmail.com
- Location: Winter Park, Orlando, Florida

## License

© 2025 Atomedia Productions LLC. All rights reserved. 