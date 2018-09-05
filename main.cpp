#include <QApplication>
#include "graphicswindow.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    GraphicsWindow graphicsWindow;
    graphicsWindow.show();
    return a.exec();
}
