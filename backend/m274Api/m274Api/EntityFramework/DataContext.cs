using m274Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace m274Api.EntityFramework
{
    public class DataContext : IdentityDbContext<Usuario, Perfil, long>
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<Demanda> Demandas { get; set; }

        public DbSet<DemandaLiberada> DemandasLiberadas { get; set; }

        public DbSet<Endereco> Enderecos { get; set; }

        public DbSet<Estado> Estados { get; set; }

        public DbSet<Imovel> Imoveis { get; set; }

        public DbSet<LPU> LPUs { get; set; }

        public DbSet<LPUEstadoClienteValor> LPUEstadoClienteValores { get; set; }

        public DbSet<Ocorrencia> Ocorrencias { get; set; }

        public DbSet<Ofensor> Ofensores { get; set; }

        public DbSet<Regiao> Regioes { get; set; }

        public DbSet<Segmento> Segmentos { get; set; }

        public DbSet<Status> Status { get; set; }

        public DbSet<TipoImovel> TipoImovels { get; set; }

        public DbSet<TipoJuncao> TipoJuncoes { get; set; }

    }
}
