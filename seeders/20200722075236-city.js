'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cities', [
      { name: 'Kyoto',
        currencyId: 1,
        currencyName: 'JPY',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594653960/kyoto_phh5wp.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Buenos Aires',
        currencyId: 2,
        currencyName: 'ARS',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654037/buenosaires_lvqeaw.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Chicago',
        currencyId: 3,
        currencyName: 'USD',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654046/chi_useqpl.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Los Angeles',
        currencyId: 3,
        currencyName: 'USD',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654066/la_mjoddn.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'New York City',
        currencyId: 3,
        currencyName: 'USD',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654081/nyc_gqod6n.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'London',
        currencyId: 4,
        currencyName: 'GPB',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654068/london_ztxcgo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Milan',
        currencyId: 5,
        currencyName: 'EUR',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654072/milan_tes6yv.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Paris',
        currencyId: 5,
        currencyName: 'EUR',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654084/paris_rqwxp3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Cairo',
        currencyId: 6,
        currencyName: 'EPG',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654039/cairo_razohc.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Istanbul',
        currencyId: 7,
        currencyName: 'TRY',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654062/istanbul_nvkzpn.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Rio De Janeiro',
        currencyId: 8,
        currencyName: 'BRL',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654088/rio_qoyiq6.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Shanghai',
        currencyId: 9,
        currencyName: 'CNY',
        url: 'https://res.cloudinary.com/dzweio5o0/image/upload/v1594654091/shanghai_flktjk.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true }).then(function(cities) {
      return queryInterface.bulkInsert('currencies', [
        { name: 'Japanese Yen',
          country: 'Japan',
          cityId: cities[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Argentine Peso',
          country: 'Argentina',
          cityId: cities[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'United States Dollar',
          country: 'United States',
          cityId: cities[2].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'United States Dollar',
          country: 'United States',
          cityId: cities[3].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'United States Dollar',
          country: 'United States',
          cityId: cities[4].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'British Pound Sterling',
          country: 'United States',
          cityId: cities[5].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Euro',
          country: 'Italy',
          cityId: cities[6].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Euro',
          country: 'France',
          cityId: cities[7].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Egyptian Pound',
          country: 'Egypt',
          cityId: cities[8].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Turkish Lira',
          country: 'Turkey',
          cityId: cities[9].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Brazilian Real',
          country: 'Brazil',
          cityId: cities[10].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { name: 'Chinese Yuan',
          country: 'China',
          cityId: cities[11].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cities', null, {})
  }
}
