// 数据配置
const CONFIG = {
    storyMapData: [
        {
            activity: 'Login/Register',
            steps: [
                {
                    name: 'Register Account',
                    stories: [
                        { text: 'As a new user, I want to be able to register with my phone number, so that I can quickly create an account.', release: 'mvp' },
                        { text: 'As a new user, I want to be able to register with my email address, so that I have a secure login option.', release: 'v1' },
                    ]
                },
                {
                    name: 'Login',
                    stories: [
                        { text: 'As a user, I want to log in with my phone number and password, so that I can access my account.', release: 'mvp' },
                        { text: 'As a user, I want to be able to log in quickly using WeChat, so that the process is more convenient.', release: 'v2' },
                    ]
                }
            ]
        },
        {
            activity: 'Browse Products',
            steps: [
                {
                    name: 'Search Products',
                    stories: [
                        { text: 'As a buyer, I want to be able to search for products by keyword, so that I can find what I need quickly.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to filter products by category, so that I can narrow down my choices.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to sort products by price, so that I can find items within my budget.', release: 'v1' },
                    ]
                },
                {
                    name: 'View Details',
                    stories: [
                        { text: 'As a buyer, I want to see high-resolution product images, so that I can inspect the product quality.', release: 'mvp' },
                        { text: 'As a buyer, I want to see other users\' reviews, so that I can make an informed purchasing decision.', release: 'mvp' },
                        { text: 'As a buyer, I want to see the product\'s detailed specifications, so that I can understand its features.', release: 'v1' },
                    ]
                },
                {
                    name: 'Add to Cart',
                    stories: [
                        { text: 'As a buyer, I want to be able to add a product to my shopping cart, so that I can purchase it later.', release: 'mvp' },
                    ]
                }
            ]
        },
        {
            activity: 'Post Products',
            steps: [
                {
                    name: 'Fill in Info',
                    stories: [
                        { text: 'As a seller, I want to be able to fill in a product\'s title and description, so that I can list it for sale.', release: 'v1' },
                        { text: 'As a seller, I want to be able to upload product images, so that buyers can see what they are purchasing.', release: 'v1' },
                    ]
                },
                {
                    name: 'Set Price',
                    stories: [
                        { text: 'As a seller, I want to be able to set the price and inventory for my product, so that I can manage my listings.', release: 'v1' },
                    ]
                }
            ]
        },
        {
            activity: 'Transaction',
            steps: [
                {
                    name: 'Place Order',
                    stories: [
                        { text: 'As a buyer, I want to be able to place an order for items in my cart, so that I can buy them.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to enter my shipping address, so that the product can be delivered to me.', release: 'mvp' },
                    ]
                },
                {
                    name: 'Payment',
                    stories: [
                        { text: 'As a buyer, I want to be able to pay with Alipay, so that I can complete my purchase.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to pay with WeChat Pay, so that I have more payment options.', release: 'v1' },
                        { text: 'As a buyer, I want to be able to pay with a credit card, so that I can use my preferred payment method.', release: 'v2' },
                    ]
                }
            ]
        },
        {
            activity: 'Review',
            steps: [
                {
                    name: 'Leave a Review',
                    stories: [
                        { text: 'As a buyer, I want to be able to leave a review for a completed order, so that I can share my experience.', release: 'v1' },
                        { text: 'As a buyer, I want to be able to rate a product, so that other buyers can see its quality.', release: 'v1' },
                    ]
                },
                {
                    name: 'View Reviews',
                    stories: [
                        { text: 'As a seller, I want to be able to see the reviews left by buyers, so that I can improve my products and service.', release: 'v1' },
                    ]
                }
            ]
        }
    ],

    backlogData: [
        { text: 'User logs in with phone number and password', priority: 'must' },
        { text: 'User searches for products by keyword', priority: 'must' },
        { text: 'User views product details and reviews', priority: 'must' },
        { text: 'User adds to cart and places an order', priority: 'must' },
        { text: 'User completes payment with Alipay', priority: 'must' },
        { text: 'User filters products by category', priority: 'should' },
        { text: 'Seller posts a product (basic functionality)', priority: 'should' },
        { text: 'User leaves a review for an order', priority: 'should' },
        { text: 'User pays with WeChat Pay', priority: 'could' },
        { text: 'User sorts products by price', priority: 'could' },
        { text: 'User registers with an email address', priority: 'could' },
    ],

    visionExamples: [
        {
            name: 'Uber',
            vision: 'For urban residents seeking a convenient way to travel, Who are tired of traffic congestion and parking difficulties, The Uber is an on-demand ride service, That connects passengers and drivers via a mobile app, providing a convenient and efficient travel experience. Unlike traditional taxis, Our product offers more flexible scheduling, transparent pricing, and personalized service.'
        },
        {
            name: 'Airbnb',
            vision: 'For travelers seeking unique and affordable accommodation, Who want authentic local experiences beyond traditional hotels, The Airbnb is a peer-to-peer accommodation platform, That connects hosts with spare rooms to guests seeking memorable stays. Unlike hotel chains, Our product offers personalized experiences, local insights, and community connections.'
        },
        {
            name: 'Spotify',
            vision: 'For music lovers who want instant access to their favorite songs, Who are frustrated by limited music libraries and high costs, The Spotify is a music streaming platform, That provides unlimited access to millions of songs with personalized recommendations. Unlike traditional music purchases, Our product offers discovery features, social sharing, and cross-device synchronization.'
        }
    ],

    additionalStories: {
        'Login/Register': {
            'Register Account': [
                'As a new user, I want to verify my phone number with SMS, so that my account is secure.',
                'As a new user, I want to set up my profile during registration, so that I can personalize my experience.',
                'As a new user, I want to agree to terms and conditions, so that I understand my rights and responsibilities.'
            ],
            'Login': [
                'As a user, I want to reset my password if I forget it, so that I can regain access to my account.',
                'As a user, I want to enable two-factor authentication, so that my account is more secure.',
                'As a user, I want to stay logged in on trusted devices, so that I don\'t have to log in repeatedly.'
            ]
        },
        'Browse Products': {
            'Search Products': [
                'As a buyer, I want to see search suggestions as I type, so that I can find products faster.',
                'As a buyer, I want to save my search queries, so that I can quickly repeat common searches.',
                'As a buyer, I want to search by image, so that I can find similar products.'
            ],
            'View Details': [
                'As a buyer, I want to zoom in on product images, so that I can see fine details.',
                'As a buyer, I want to see related products, so that I can compare options.',
                'As a buyer, I want to ask questions about the product, so that I can get clarification from the seller.'
            ]
        }
    }
};

export default CONFIG;
