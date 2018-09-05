#include <Qt3DExtras/Qt3DWindow>
#include <Qt3DCore/QEntity>
#include <Qt3DCore/QTransform>

class GraphicsWindow : public Qt3DExtras::Qt3DWindow {
public:
    GraphicsWindow();
    void wheelEvent ( QWheelEvent * event ) override;

private:
    Qt3DCore::QEntity *createScene();
    Qt3DCore::QTransform *planeTransform;
};
