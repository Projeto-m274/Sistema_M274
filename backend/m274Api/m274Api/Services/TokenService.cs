using m274Api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace m274Api.Services
{
    public class TokenService : ITokenService
    {
        private readonly Settings settings;
        private readonly UserManager<Usuario> _usuarioManager;

        public TokenService(IOptions<Settings> options,
                            UserManager<Usuario> usuarioManager)
        {
            settings = options.Value;
            _usuarioManager = usuarioManager;
        }
        public async Task<string> GenerateToken(Usuario usuario)
        {
            IList<string> roles = await _usuarioManager.GetRolesAsync(usuario);

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(settings.JWTKey);

            List<Claim> claims = new();
            claims.Add(new Claim(ClaimTypes.Name, usuario.UserName.ToString()));
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials =
                    new SigningCredentials(
                        new SymmetricSecurityKey(key),
                            SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
