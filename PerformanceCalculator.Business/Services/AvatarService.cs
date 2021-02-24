using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Drawing.Text;
using System.IO;
using PerformanceCalculator.Common.Extensions;

namespace PerformanceCalculator.Business.Services
{
    public class AvatarService
    {
        private readonly IReadOnlyList<string> _bgColors;

        public AvatarService()
        {
            _bgColors = new List<string> {"B26126", "FFF7F2", "FFE8D8", "74ADB2", "D8FCFF"};
        }

        public string Generate(string displayName)
        {
            var avatarString = string.Format("{0}{1}", displayName[0], displayName[^1]).ToUpper();

            var randomIndex = new Random().Next(0, _bgColors.Count - 1);
            var bgColour = _bgColors[randomIndex];

            var bmp = new Bitmap(192, 192);
            var sf = new StringFormat();
            sf.Alignment = StringAlignment.Center;
            sf.LineAlignment = StringAlignment.Center;

            var font = new Font("Arial", 48, FontStyle.Bold, GraphicsUnit.Pixel);
            var graphics = Graphics.FromImage(bmp);

            graphics.Clear((Color) new ColorConverter().ConvertFromString("#" + bgColour));
            graphics.SmoothingMode = SmoothingMode.AntiAlias;
            graphics.TextRenderingHint = TextRenderingHint.ClearTypeGridFit;
            graphics.DrawString(avatarString, font, new SolidBrush(Color.WhiteSmoke), new RectangleF(0, 0, 192, 192),
                sf);
            graphics.Flush();

            var ms = new MemoryStream();
            bmp.Save(ms, ImageFormat.Png);

            return ms.ConvertToBase64();
        }
    }
}