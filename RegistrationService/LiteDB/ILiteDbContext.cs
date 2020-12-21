using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;

namespace RegistrationService.LiteDB
{
    public interface ILiteDbContext
    {
        LiteDatabase Database { get; }
    }
}
