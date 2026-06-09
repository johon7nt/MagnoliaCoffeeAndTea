/* ================================================
   MAGNOLIA — Menu Data + Rendering
   ================================================ */

const menuData = {
  cafes: {
    groups: [
      {
        title: 'Café Solo',
        items: [
          { name: 'Espresso', price: '$3.200' },
          { name: 'Café jarrito', price: '$3.800' },
          { name: 'Café americano', price: '$4.700' }
        ]
      },
      {
        title: 'Con Leche',
        items: [
          { name: 'Cortado pocillo', price: '$4.200' },
          { name: 'Cortado jarrito', price: '$4.300' },
          { name: 'Cortado doble', price: '$6.200' },
          { name: 'Café con leche', price: '$6.000' },
          { name: 'Café con leche en tazón', price: '$9.200' },
          { name: 'Lágrima', price: '$5.400' },
          { name: 'Mocca', price: '$6.300' },
          { name: 'Vainilla latte', price: '$6.300' },
          { name: 'Cappuccino', price: '$6.000' }
        ]
      },
      {
        title: '✨ Nutelatte Magnolia',
        featured: true,
        items: [
          { name: 'Nutelatte Magnolia', price: '$8.500', badges: ['nuevo'] }
        ],
        note: 'Nuestra creación exclusiva — Café con leche + Nutella artesanal'
      },
      {
        title: 'Fríos',
        items: [
          { name: 'Iced latte', price: '$6.500' },
          { name: 'Iced latte vainilla', price: '$7.000' },
          { name: 'Iced cortado', price: '$7.000' },
          { name: 'Chocolatada', price: '$6.500' },
          { name: 'Submarino', price: '$5.900' }
        ]
      },
      {
        title: 'Blends de Té — $5.500 c/u',
        isBlends: true,
        blends: [
          'Día de sol','Sereno despertar','Encanto del bosque','Jardín de la alegría',
          'Brisa Serrana','Miss Butterfly','Apple Chai','ChocolaTé','Naranja Split','Bendita cosecha'
        ]
      },
      {
        title: 'Tés Clásicos',
        items: [
          { name: 'Té negro', price: '$3.200' },
          { name: 'Mate cocido', price: '$3.000' },
          { name: 'Té manzanilla', price: '$3.200' }
        ]
      },
      {
        title: 'Adicionales',
        items: [
          { name: 'Leche deslactosada', price: '+$600' },
          { name: 'Leche de almendras', price: '+$1.500' },
          { name: 'Crema', price: '+$550' }
        ],
        note: 'Podés personalizar cualquier café'
      }
    ]
  },

  dulce: {
    groups: [
      {
        title: 'Salado',
        items: [
          { name: 'Croissant', price: '$5.900' },
          { name: 'Croissant jamón y queso', price: '$8.700' },
          { name: 'Croissant pollo, tomate, lechuga y huevo', price: '$14.000' },
          { name: '2 Medialunas con jamón y queso', price: '$10.300' },
          { name: '2 Fosforitos', price: '$10.300' },
          { name: 'Yogurt con cereales, granola y frutas', price: '$9.800' },
          { name: 'Canasta de tostadas con 2 dips a elección', price: '$14.000' },
          { name: 'Scón de queso', price: '$5.500' },
          { name: 'Ensalada de fruta', price: '$7.600' }
        ]
      },
      {
        title: 'Tostados & Sandwiches',
        items: [
          { name: 'Tostado pan de miga jamón y queso', price: '$7.000' },
          { name: 'Tostado pan árabe jamón y queso', price: '$8.000' },
          { name: 'Tostado pan árabe jamón, tomate y huevo', price: '$9.200' },
          { name: 'Avocado toast', price: '$9.800' },
          { name: 'Avocado Magnolia', price: '$10.300' },
          { name: 'Tostón Ibérico', price: '$10.800' },
          { name: 'Croque monsieur', price: '$9.800' },
          { name: 'Sandwich de miga', price: '$3.200' },
          { name: 'Sandwich árabe', price: '$8.000' },
          { name: 'Ciabatta', price: '$13.000' },
          { name: 'Ciabatta rústica', price: '$14.000' },
          { name: 'Pletzalej', price: '$9.800' }
        ]
      },
      {
        title: 'Medialunas & Cookies',
        items: [
          { name: 'Medialunas de manteca / grasa', price: '$2.200' },
          { name: 'Cookie clásica XL', price: '$3.800' },
          { name: 'Cookie rellena XL', price: '$6.500' }
        ]
      },
      {
        title: 'Brownies & Cuadrados',
        items: [
          { name: 'Brownie con nuez', price: '$6.000' },
          { name: 'Brownie oreo', price: '$6.000' },
          { name: 'Cuadrado pastafrola membrillo/batata', price: '$4.900' },
          { name: 'Crumble de manzana', price: '$6.000' },
          { name: 'Cuadrado de limón', price: '$6.000' },
          { name: 'Cuadrado naranja y amapola', price: '$6.000' },
          { name: 'Cuadrado coco y dulce de leche', price: '$6.000' },
          { name: 'Cuadrado de ricota', price: '$5.900' },
          { name: 'Cuadrado de frutos rojos', price: '$6.200' }
        ]
      },
      {
        title: 'Alfajores & Tartas',
        items: [
          { name: 'Alfajor de pistacho XL', price: '$9.800' },
          { name: 'Alfajor de nuez', price: '$7.000' },
          { name: 'Alfajor choco nutella', price: '$7.000' },
          { name: 'Alfajor de chocolate negro', price: '$5.600' },
          { name: 'Alfajor de maicena', price: '$5.600' },
          { name: 'Mini tarta frutilla', price: '$9.200' }
        ]
      },
      {
        title: 'Muffins',
        items: [
          { name: 'Pistacho', price: '$8.200' },
          { name: 'Chocolate con chips', price: '$5.800' },
          { name: 'Frutos rojos', price: '$6.200' },
          { name: 'Vainilla con chips', price: '$6.200' },
          { name: 'Choco oreo', price: '$6.200' }
        ]
      },
      {
        title: 'Macarons & Croissants Rellenos',
        items: [
          { name: 'Macarons', price: '$2.500' },
          { name: 'Croissant relleno — Dulce de leche', price: '$6.500' },
          { name: 'Croissant relleno — Chocotorta', price: '$8.000' },
          { name: 'Croissant relleno — Pastelera', price: '$7.000' },
          { name: 'Croissant relleno — Nutella', price: '$8.800' }
        ]
      },
      {
        title: 'Postres Individuales Semi Fríos',
        items: [
          { name: 'Golosina', price: '$12.000' },
          { name: 'Chocotorta', price: '$11.900' },
          { name: 'Tiramisú', price: '$10.800' },
          { name: 'Limón pie', price: '$9.200' },
          { name: 'Mousse dúo', price: '$10.800' },
          { name: 'Red velvet', price: '$10.200' },
          { name: 'Franui', price: '$9.200' },
          { name: 'Brownie goloso', price: '$10.800' },
          { name: 'Cheesecake pistacho', price: '$13.000' },
          { name: 'Cheesecake cocido', price: '$10.800' }
        ]
      },
      {
        title: 'Porciones',
        items: [
          { name: 'Porción de budín (consultar stock)', price: '$5.000' },
          { name: 'Porción de torta', price: '$11.000' }
        ]
      }
    ]
  },

  platos: {
    groups: [
      {
        title: 'Platos — 11:30 a 14:30hs',
        items: [
          { name: 'Tarta individual + ensalada', price: '$9.800' },
          { name: 'Canastita integral + ensalada', price: '$7.600' },
          { name: 'Empanada', price: '$300' },
          { name: 'Wrap de pollo, lechuga, queso y tomate', price: '$15.000' },
          { name: 'Wrap vegetariano (zapallito o berenjenas)', price: '$13.500' },
          { name: 'Sandwich milanesa de ternera, lechuga, tomate', price: '$9.800' },
          { name: 'Sandwich vegetariano (baguetón integral)', price: '$8.700' }
        ]
      },
      {
        title: 'A la Parrilla + Guarnición',
        items: [
          { name: 'Pechuga grillada', price: 'Consultar' },
          { name: 'Milanesa suprema', price: 'Consultar' },
          { name: 'Milanesa de ternera', price: 'Consultar' },
          { name: 'Milanesa de berenjena', price: 'Consultar' }
        ],
        note: 'Adicional napa +$1.500'
      },
      {
        title: 'Ensaladas',
        items: [
          { name: 'De la huerta', price: '$10.800' },
          { name: 'Vegetariana', price: '$13.000' },
          { name: 'Del chef', price: '$14.000' },
          { name: 'César', price: '$15.200' }
        ]
      },
      {
        title: 'Guarniciones',
        isGarnish: true,
        garnishes: ['Papas rústicas', 'Ensalada tres gustos', 'Puré de calabaza']
      },
      {
        title: 'Nuestros Combos',
        isCombos: true,
        wide: true,
        combos: [
          {
            desc: 'Café o Té + jugo de naranja + mix de tostadas con dips de queso y mermelada + jamón y queso',
            price: '$17.800'
          },
          {
            desc: 'Café o Té + jugo de naranja + tostón con huevo, palta y cherrys',
            price: '$20.500'
          },
          {
            desc: 'Café o Té + jugo de naranja + 2 medialunas',
            price: '$13.000'
          },
          {
            desc: 'Café o Té + jugo de naranja + porción de torta',
            price: '$16.800'
          }
        ]
      }
    ]
  }
};

/* ── RENDER FUNCTIONS ── */

function renderItem(item) {
  const badges = (item.badges || []).map(b => {
    if (b === 'nuevo') return '<span class="badge-n">Nuevo</span>';
    if (b === 'sintacc') return '<span class="badge-g">Sin TACC</span>';
    return '';
  }).join('');
  return `
    <div class="menu-item">
      <span class="item-name">${item.name}${badges}</span>
      <span class="item-price">${item.price}</span>
    </div>`;
}

function renderGroup(g) {
  if (g.isBlends) {
    return `
      <div class="menu-group">
        <div class="menu-group-title">${g.title}</div>
        <div class="blend-tags">
          ${g.blends.map(b => `<span class="blend-tag">${b}</span>`).join('')}
        </div>
      </div>`;
  }
  if (g.isGarnish) {
    return `
      <div class="menu-group">
        <div class="menu-group-title">${g.title}</div>
        <div class="garnish-chips">
          ${g.garnishes.map(n => `<span class="garnish-chip">${n}</span>`).join('')}
        </div>
      </div>`;
  }
  if (g.isCombos) {
    return `
      <div class="menu-group${g.wide ? ' menu-wide' : ''}">
        <div class="menu-group-title">${g.title}</div>
        <div class="combo-list">
          ${g.combos.map((c, i) => `
            <div class="combo-card">
              <div class="combo-num">${i + 1}</div>
              <div>
                <div class="combo-desc">${c.desc}</div>
                <div class="combo-price">${c.price}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }
  return `
    <div class="menu-group${g.featured ? ' featured' : ''}">
      <div class="menu-group-title">${g.title}</div>
      ${(g.items || []).map(renderItem).join('')}
      ${g.note ? `<p class="menu-note">${g.note}</p>` : ''}
    </div>`;
}

function renderTab(key) {
  const tab = menuData[key];
  return `<div class="menu-cols">${tab.groups.map(renderGroup).join('')}</div>`;
}

/* ── INIT ── */
(function initMenu() {
  const container = document.getElementById('menu-content');
  if (!container) return;

  const keys = ['cafes', 'dulce', 'platos'];
  keys.forEach(key => {
    const panel = document.createElement('div');
    panel.className = 'menu-panel' + (key === 'cafes' ? ' active' : '');
    panel.id = 'panel-' + key;
    panel.innerHTML = renderTab(key);
    container.appendChild(panel);
  });
})();
