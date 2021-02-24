using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;

namespace PerformanceCalculator.Common.Extensions
{
    public static class EnumExtension
    {
        public static string GetDisplayName<T>(this T enumValue) where T : IComparable, IFormattable, IConvertible
        {
            if (!typeof(T).IsEnum)
                throw new ArgumentException("Argument must be of type Enum");

            var displayAttribute = enumValue.GetType()
                .GetMember(enumValue.ToString())
                .First()
                .GetCustomAttribute<DisplayAttribute>();

            var displayName = displayAttribute?.GetName();

            return displayName ?? enumValue.ToString();
        }
    }
}