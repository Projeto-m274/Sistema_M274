#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["m274Api/m274Api.csproj", "m274Api/"]
RUN dotnet restore "m274Api/m274Api.csproj"
COPY . .
WORKDIR "/src/m274Api"
RUN dotnet build "m274Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "m274Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "m274Api.dll"]