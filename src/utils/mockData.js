// zomato mock data

const allResList = [
    {
      type: "restaurant",
      info: {
        resId: 90943,
        name: "Udipi's Upahar",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/chains/3/90943/ae983bd7dd3098d375f3d4bb15ff8677_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/chains/3/90943/ae983bd7dd3098d375f3d4bb15ff8677_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "16.9K",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.2",
              reviewCount: "864",
              reviewTextSmall: "864 Reviews",
              subtext: "864 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.2",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.5",
              reviewCount: "16K",
              reviewTextSmall: "16K Reviews",
              subtext: "16K Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.5",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "800",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.5",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹1,000 for two",
        },
        cfo: {
          text: "₹400 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "House 2-21/4, Kanhaiyalal Complex, Indhira Nagar, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
            name: "South Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/sandwich/",
            name: "Sandwich",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            name: "Fast Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/ice-cream/",
            name: "Ice Cream",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
            name: "Beverages",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/shake/",
            name: "Shake",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹400 for one",
        },
      },
      order: {
        deliveryTime: "23 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/udipis-upahar-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/udipis-upahar-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "679 m",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"90943","element_type":"listing","rank":1}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "50% OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 18931484,
        name: "Nimantran",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/4/18931484/1fba3535221d0893c770a20b349a0974_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/4/18931484/1fba3535221d0893c770a20b349a0974_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.8",
          rating_text: "3.8",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "5,727",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.1",
              reviewCount: "44",
              reviewTextSmall: "44 Reviews",
              subtext: "44 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.1",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.5",
              reviewCount: "5,683",
              reviewTextSmall: "5,683 Reviews",
              subtext: "5,683 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.5",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "800",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "800",
                    },
                    rating: "4.5",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.5",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹250 for two",
        },
        cfo: {
          text: "₹100 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address: "PGR Nagar, Babu Khan Solitaire Lane, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/bengali/",
            name: "Bengali",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1N1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/odia/",
            name: "Odia",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹100 for one",
        },
      },
      order: {
        deliveryTime: "23 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/nimantran-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/nimantran-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "1.3 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18931484","element_type":"listing","rank":2}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 95519,
        name: "KFC",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/chains/5/90195/27a0c6e70b3754d9cfb14d6eccb44bd0_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/chains/5/90195/27a0c6e70b3754d9cfb14d6eccb44bd0_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.8",
          rating_text: "3.8",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "34.9K",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.7",
              reviewCount: "1,300",
              reviewTextSmall: "1,300 Reviews",
              subtext: "1,300 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.7",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.0",
              reviewCount: "33.6K",
              reviewTextSmall: "33.6K Reviews",
              subtext: "33.6K Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.0",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.0",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.7",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.7",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹500 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "Survey 124, Vinayaknagar, Serlingampally Circle, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/burger/",
            name: "Burger",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            name: "Fast Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/rolls/",
            name: "Rolls",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹200 for one",
        },
      },
      order: {
        deliveryTime: "21 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/kfc-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/kfc-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "301 m",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"95519","element_type":"listing","rank":3}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 18853563,
        name: "Vasista's Srilakshmi",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/3/18853563/c30b2a100bc8b534f95b074a84d9e358_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/3/18853563/c30b2a100bc8b534f95b074a84d9e358_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.0",
          rating_text: "4.0",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "12.7K",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.9",
              reviewCount: "129",
              reviewTextSmall: "129 Reviews",
              subtext: "129 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.9",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.1",
              reviewCount: "12.6K",
              reviewTextSmall: "12.6K Reviews",
              subtext: "12.6K Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.1",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.1",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.1",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.9",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹700 for two",
        },
        cfo: {
          text: "₹300 for one",
        },
        locality: {
          name: "Kondapur, Hyderabad",
          address:
            "1-55/12/M/1-A-5-B, Kondapur Main Road, Gautami Enclave, Kondapur, Hyderabad",
          localityUrl: "hyderabad/kondapur-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
            name: "Andhra",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/kebab/",
            name: "Kebab",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
            name: "Chinese",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹300 for one",
        },
      },
      order: {
        deliveryTime: "33 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/vasistas-srilakshmi-kondapur/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/vasistas-srilakshmi-kondapur/order",
        clickActionDeeplink: "",
      },
      distance: "2.5 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18853563","element_type":"listing","rank":4}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "₹100 OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 18418734,
        name: "Sri Kanya",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/4/18418734/008b221ce51f7fb949612395aa2e916d_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/4/18418734/008b221ce51f7fb949612395aa2e916d_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.0",
          rating_text: "4.0",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "24.8K",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.9",
              reviewCount: "827",
              reviewTextSmall: "827 Reviews",
              subtext: "827 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.9",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.2",
              reviewCount: "24K",
              reviewTextSmall: "24K Reviews",
              subtext: "24K Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.2",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "4.0",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹600 for two",
        },
        cfo: {
          text: "₹250 for one",
        },
        locality: {
          name: "Kondapur, Hyderabad",
          address:
            "1-111/4/ 122 & 123, Ground Floor, Ravi Enclave, Kondapur, Hyderabad",
          localityUrl: "hyderabad/kondapur-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
            name: "Andhra",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            name: "North Indian",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹250 for one",
        },
      },
      order: {
        deliveryTime: "28 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/sri-kanya-kondapur/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/sri-kanya-kondapur/order",
        clickActionDeeplink: "",
      },
      distance: "2.9 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18418734","element_type":"listing","rank":5}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 20320527,
        name: "Wendy's Burgers",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/7/20320527/cd6ce0f63cbf06f343de64700ee68ffe_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/7/20320527/cd6ce0f63cbf06f343de64700ee68ffe_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "4,225",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "",
              reviewCount: "0",
              reviewTextSmall: "0 Reviews",
              subtext: "Does not offer Dining",
              color: "",
              ratingV2: "-",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "grey",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.4",
              reviewCount: "4,225",
              reviewTextSmall: "4,225 Reviews",
              subtext: "4,225 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.4",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.4",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹500 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "13, First Floor, Survey 90/1, Gachibowli Village, Serlingampally Mandal, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/burger/",
            name: "Burger",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            name: "Fast Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/american/",
            name: "American",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹200 for one",
        },
      },
      order: {
        deliveryTime: "21 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/wendys-burgers-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/wendys-burgers-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "880 m",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20320527","element_type":"listing","rank":6}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "30% OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 19633740,
        name: "The Nawaabs Restaurant",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/0/19633740/3ab2b26380204bfbfbe2979f524e4d70_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/0/19633740/3ab2b26380204bfbfbe2979f524e4d70_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.9",
          rating_text: "3.9",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "8,511",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.7",
              reviewCount: "224",
              reviewTextSmall: "224 Reviews",
              subtext: "224 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.7",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.4",
              reviewCount: "8,287",
              reviewTextSmall: "8,287 Reviews",
              subtext: "8,287 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.4",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.4",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.9",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.9",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹850 for two",
        },
        cfo: {
          text: "₹350 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address: "3/136, Anjaiah Nagar, Gachibowli Road, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
            name: "Hyderabadi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/arabian/",
            name: "Arabian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
            name: "Mughlai",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTU3XCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/lucknowi/",
            name: "Lucknowi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/mandi/",
            name: "Mandi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹350 for one",
        },
      },
      order: {
        deliveryTime: "31 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/the-nawaabs-restaurant-1-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/the-nawaabs-restaurant-1-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "1.2 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19633740","element_type":"listing","rank":7}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "Flat 10% OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 20463486,
        name: "Red Bucket Biryani",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/6/20463486/2d27bc6bd4b04102d50178d030c668e2_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/6/20463486/2d27bc6bd4b04102d50178d030c668e2_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.8",
          rating_text: "3.8",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "1,944",
          subtext: "REVIEW",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "",
              reviewCount: "0",
              reviewTextSmall: "0 Reviews",
              subtext: "Does not offer Dining",
              color: "",
              ratingV2: "-",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "grey",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "3.9",
              reviewCount: "1,944",
              reviewTextSmall: "1,944 Reviews",
              subtext: "1,944 Delivery Reviews",
              color: "#E23744",
              ratingV2: "3.9",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.9",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.8",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.8",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹400 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "2-62/2/A/3/1, Street 3, Chinna Anjaiah Nagar, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
            name: "Seafood",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹200 for one",
        },
      },
      order: {
        deliveryTime: "16 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/red-bucket-biryani-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/red-bucket-biryani-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "870 m",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20463486","element_type":"listing","rank":8}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 18959384,
        name: "Domino's Pizza",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/4/18959384/43eb28eeff9385c27a7b09030e51a818_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/4/18959384/43eb28eeff9385c27a7b09030e51a818_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "7,737",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "",
              reviewCount: "0",
              reviewTextSmall: "0 Reviews",
              subtext: "Does not offer Dining",
              color: "",
              ratingV2: "-",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "grey",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.4",
              reviewCount: "7,737",
              reviewTextSmall: "7,737 Reviews",
              subtext: "7,737 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.4",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.4",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.2",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "grey",
                      tint: "500",
                    },
                    rating: "0.0",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹400 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "Ayyappa Heights, Commercial Premises Bearing 4-33, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
            name: "Pizza",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            name: "Fast Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹200 for one",
        },
      },
      order: {
        deliveryTime: "23 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/dominos-pizza-9-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/dominos-pizza-9-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "1.1 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18959384","element_type":"listing","rank":9}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "₹175 OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 19294204,
        name: "Kritunga Restaurant-Jagavi's",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/chains/9/18707539/0644c6ad171fc2363becaab06ddabfd7_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/chains/9/18707539/0644c6ad171fc2363becaab06ddabfd7_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.7",
          rating_text: "3.7",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "10.1K",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.3",
              reviewCount: "23",
              reviewTextSmall: "23 Reviews",
              subtext: "23 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.3",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.1",
              reviewCount: "10K",
              reviewTextSmall: "10K Reviews",
              subtext: "10K Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.1",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.1",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.1",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.1",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹1,000 for two",
        },
        cfo: {
          text: "₹400 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "Plot 69 & 70, Lumbini Avenue, Opposite My Home Bhooja, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
            name: "Andhra",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/mughlai/",
            name: "Mughlai",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
            name: "Seafood",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            name: "North Indian",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹400 for one",
        },
      },
      order: {
        deliveryTime: "22 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/kritunga-restaurant-jagavis-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/kritunga-restaurant-jagavis-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "2.4 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19294204","element_type":"listing","rank":10}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "₹150 OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 97107,
        name: "Pizza Hut",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/7/97107/1ba1291ac49227e9a1a9dbdf5e28489d_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/7/97107/1ba1291ac49227e9a1a9dbdf5e28489d_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.4",
          rating_text: "3.4",
          rating_subtitle: "Average",
          rating_color: "CDD614",
          votes: "8,911",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "2.9",
              reviewCount: "250",
              reviewTextSmall: "250 Reviews",
              subtext: "250 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "2.9",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "yellow",
                tint: "600",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.0",
              reviewCount: "8,661",
              reviewTextSmall: "8,661 Reviews",
              subtext: "8,661 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.0",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "4.0",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.6",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "600",
                    },
                    rating: "3.6",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹500 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Gachibowli, Hyderabad",
          address:
            "Plot 127, Door 2-3-127, Circle 12, Serilingampally, Gachibowli, Hyderabad",
          localityUrl: "hyderabad/gachibowli-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
            name: "Pizza",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
            name: "Pasta",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/italian/",
            name: "Italian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹200 for one",
        },
      },
      order: {
        deliveryTime: "25 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/pizza-hut-1-gachibowli/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/pizza-hut-1-gachibowli/order",
        clickActionDeeplink: "",
      },
      distance: "478 m",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"97107","element_type":"listing","rank":11}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [
        {
          text: "30% OFF",
          color: {
            tint: "500",
            type: "blue",
          },
        },
      ],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 21235678,
        name: "Chaitanya Food Court",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/8/21235678/96b95f22facbab413a32291e47e9cf41_o2_featured_v2.jpg",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/8/21235678/96b95f22facbab413a32291e47e9cf41_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.4",
          rating_text: "4.4",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "5,505",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "",
              reviewCount: "0",
              reviewTextSmall: "0 Reviews",
              subtext: "Does not offer Dining",
              color: "",
              ratingV2: "-",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "grey",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.5",
              reviewCount: "5,505",
              reviewTextSmall: "5,505 Reviews",
              subtext: "5,505 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.5",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "800",
              },
              newOnDelivery: false,
              bucketRatings: {
                buckets: [
                  {
                    title: "Under 4 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.5",
                  },
                  {
                    title: "4 km to 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.5",
                  },
                  {
                    title: "Above 7 km",
                    bgColor: {
                      type: "green",
                      tint: "700",
                    },
                    rating: "4.5",
                  },
                ],
                tooltip: {
                  title: "For orders under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "050",
                  },
                  borderColor: {
                    type: "green",
                    tint: "300",
                  },
                },
              },
            },
          },
        },
        cft: {
          text: "₹950 for two",
        },
        cfo: {
          text: "₹400 for one",
        },
        locality: {
          name: "Kondapur, Hyderabad",
          address:
            "1-55-199, Survey 199 P, Botanical Garden Road, Kondapur, Hyderabad",
          localityUrl: "hyderabad/kondapur-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
            name: "Andhra",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
            name: "South Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
            name: "Beverages",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
            name: "Desserts",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹400 for one",
        },
      },
      order: {
        deliveryTime: "29 min",
        isServiceable: true,
        hasOnlineOrdering: true,
        actionInfo: {
          text: "Order Now",
          clickUrl: "/hyderabad/chaitanya-food-court-kondapur/order",
        },
      },
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/hyderabad/chaitanya-food-court-kondapur/order",
        clickActionDeeplink: "",
      },
      distance: "2.2 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"ef1a31f7-d860-452b-9a38-d0789c838376","location_type":"delivery_cell","location_id":"4308699742038130688","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21235678","element_type":"listing","rank":12}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: true,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
  ];

export default allResList;