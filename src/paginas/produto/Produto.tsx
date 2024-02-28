function Produto() {
        const people = [
            {
              name: 'Pomada para assaduras',
              role: 'Pomadas',
              imageUrl:
                'https://io.convertiez.com.br/m/drogariaveracruz/shop/products/images/16806/small/pomada-nistatina-oxido-de-zinco-neo-quimica-60g_11913.png',
            },
           
              {
                name: 'Sinvastatina',
                role: 'Colesterol',
                imageUrl:
                  'https://drogariacoop.vtexassets.com/arquivos/ids/168729/Novo-Projeto---2023-06-21T151626.152.jpg?v=638229683438170000',
              },
              {
                name: 'Gucci Guilty',
                role: 'Perfumes',
                imageUrl:
                  'https://static.beautytocare.com/media/catalog/product/g/u/gucci-guilty-eau-de-toilette-for-men-50ml-2.jpg',
              },
          ]
          
          {
            return (
              <div className="bg-ambar-100 py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Confira nossos Produtos</h2>
                  </div>
                  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                          <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-green-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-blue-600">{person.role}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
    );
}
}

export default Produto;